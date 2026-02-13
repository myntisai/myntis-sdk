import { ethers } from 'ethers';
import { calculateWeightedRewards, generateProviderProof as generateProviderProofAPI } from '../api/index.js';
import { MyntisMerkleTree } from '../merkle/index.js';
import { SignerRequiredError } from '../utils/errors.js';
import { generateProviderBatchProof, isZKProofAvailable } from '../zk/index.js';
export class ProviderOperations {
    constructor(token, staking, distributor, stakingAddress, distributorAddress, chainId, api, signerAddress) {
        this.token = token;
        this.staking = staking;
        this.distributor = distributor;
        this.stakingAddress = stakingAddress;
        this.distributorAddress = distributorAddress;
        this.chainId = chainId;
        this.api = api;
        this.signerAddress = signerAddress;
    }
    // Staking operations
    async stake(amount) {
        if (!this.signerAddress) {
            throw new SignerRequiredError('stake');
        }
        // First approve staking contract
        const allowance = await this.token.allowance(this.signerAddress, this.stakingAddress);
        if (allowance < amount) {
            await this.token.approve(this.stakingAddress, amount);
        }
        return await this.staking.stakeToProviderPool(amount);
    }
    async unstake(amount) {
        return await this.staking.unstakeFromProviderPool(amount);
    }
    // Emissions harvesting
    async harvestEmissions() {
        if (!this.signerAddress) {
            throw new SignerRequiredError('harvestEmissions');
        }
        const beforeBalance = await this.staking.providerAccruedEmissions(this.signerAddress);
        const tx = await this.staking.harvestFromEmissions(this.signerAddress);
        await tx.wait();
        const afterBalance = await this.staking.providerAccruedEmissions(this.signerAddress);
        const amount = afterBalance - beforeBalance;
        return { tx, amount };
    }
    async fundDistributor(amount) {
        if (!this.signerAddress) {
            throw new SignerRequiredError('fundDistributor');
        }
        return await this.staking.fundProviderBalance(this.signerAddress, amount);
    }
    // Merkle tree building
    buildMerkleTree(entries, chainId) {
        return new MyntisMerkleTree(entries, chainId || this.chainId);
    }
    // Quality weighting (OPTIONAL - requires custom implementation or API)
    async applyQualityWeighting(entries) {
        // If API client is configured, use it
        if (this.api) {
            if (!this.signerAddress) {
                throw new SignerRequiredError('applyQualityWeighting');
            }
            try {
                return await calculateWeightedRewards(this.api, entries, this.signerAddress, true);
            }
            catch (error) {
                console.warn('Quality weighting via API failed:', error);
                // Fall through to return original entries
            }
        }
        // No API configured - return entries as-is (no quality adjustment)
        console.info('No API configured. Quality weighting skipped. Using raw reward amounts.');
        return entries;
    }
    // ZK proof generation (BUILT-IN - uses bundled circuit, no API needed)
    async generateZKProof(entries, merkleRoot, totalAmount) {
        // Try built-in ZK proof generation first (self-sufficient)
        if (isZKProofAvailable()) {
            try {
                console.info('Generating ZK proof using bundled circuit...');
                const zkProof = await generateProviderBatchProof(entries, merkleRoot, totalAmount, this.chainId);
                console.info('✅ ZK proof generated successfully (self-sufficient)');
                return zkProof;
            }
            catch (error) {
                console.error('Built-in ZK proof generation failed:', error);
                // Fall through to API if available
            }
        }
        // Fallback: Try API if configured
        if (this.api) {
            try {
                console.info('Falling back to API for ZK proof generation...');
                const users = entries.map(e => e.walletAddress);
                const scores = entries.map(e => e.qualityMultiplier || 1.0);
                const multipliers = entries.map(e => e.qualityMultiplier || 1.0);
                const amounts = entries.map(e => Number(ethers.formatUnits(e.totalRewards, 18)));
                const zkProof = await generateProviderProofAPI(this.api, {
                    users,
                    scores,
                    multipliers,
                    amounts,
                    totalAmountWei: totalAmount.toString(),
                    chainId: this.chainId,
                });
                console.info('✅ ZK proof generated via API');
                return zkProof;
            }
            catch (error) {
                console.error('API ZK proof generation failed:', error);
            }
        }
        // No ZK proof available
        throw new Error('ZK proof generation failed. Built-in circuit not available and no API configured. ' +
            'Merkle distribution requires ZK proofs to prevent yield farming.');
    }
    // Full distribution flow
    async distributeRewards(entries, options = {}) {
        if (!this.signerAddress) {
            throw new SignerRequiredError('distributeRewards');
        }
        const { applyQuality = false, generateZKProof: shouldGenerateZKProof = false, expiryDays = 7, chainId = this.chainId, } = options;
        // Step 1: Apply quality weighting if requested
        let processedEntries = entries;
        if (applyQuality && this.api) {
            processedEntries = await this.applyQualityWeighting(entries);
        }
        // Step 2: Build Merkle tree
        const merkleTree = this.buildMerkleTree(processedEntries, chainId);
        const result = merkleTree.getResult();
        // Step 3: Generate ZK proof if requested
        let zkProof;
        if (shouldGenerateZKProof) {
            const proof = await this.generateZKProof(result.entries, result.root, result.totalAmount);
            if (proof) {
                zkProof = proof;
            }
        }
        // Step 4: Submit merkle root
        const expiry = Math.floor(Date.now() / 1000) + expiryDays * 24 * 60 * 60;
        const { tx, rootIndex } = await this.distributor.submitMerkleRoot(result.root, expiry, result.totalAmount, zkProof?.proof, zkProof?.publicInputs);
        return {
            merkleTree: result,
            zkProof,
            rootIndex,
            txHash: tx.hash,
        };
    }
    // Query operations
    async getAccruedEmissions() {
        if (!this.signerAddress) {
            throw new SignerRequiredError('getAccruedEmissions');
        }
        return await this.staking.providerAccruedEmissions(this.signerAddress);
    }
    async getDistributorBalance() {
        if (!this.signerAddress) {
            throw new SignerRequiredError('getDistributorBalance');
        }
        return await this.distributor.getProviderBalance(this.signerAddress);
    }
    async getInfo() {
        if (!this.signerAddress) {
            throw new SignerRequiredError('getInfo');
        }
        return await this.staking.getProviderInfo(this.signerAddress);
    }
    async withdrawEmissions(amount) {
        if (!this.signerAddress) {
            throw new SignerRequiredError('withdrawEmissions');
        }
        return await this.staking.withdrawProviderEmissions(this.signerAddress, amount);
    }
}
