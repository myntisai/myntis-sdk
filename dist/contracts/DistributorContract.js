import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import { ZKMERKLEDISTRIBUTOR_ABI } from '../abi/ZKMerkleDistributor.js';
export class DistributorContract extends BaseContract {
    constructor(address, providerOrSigner) {
        super(address, ZKMERKLEDISTRIBUTOR_ABI, providerOrSigner);
    }
    // Provider operations
    async submitMerkleRoot(root, expiry, totalClaimableAmount, zkProof, publicInputs) {
        this.requireSigner();
        let tx;
        if (zkProof && publicInputs) {
            // Submit with ZK proof
            tx = await this.contract.submitMerkleRoot(root, expiry, totalClaimableAmount, zkProof.a, zkProof.b, zkProof.c, publicInputs);
        }
        else {
            // Submit without ZK proof (fallback)
            tx = await this.contract.submitMerkleRootWithoutProof(root, expiry, totalClaimableAmount);
        }
        // Wait for tx and extract rootIndex from logs
        const receipt = await tx.wait();
        let rootIndex = -1;
        // Parse MerkleRootSubmitted event
        for (const log of receipt.logs) {
            if (log.topics && log.topics.length >= 3) {
                try {
                    rootIndex = Number(ethers.getBigInt(log.topics[2]));
                    break;
                }
                catch { }
            }
        }
        return { tx, rootIndex };
    }
    async depositBalance(amount) {
        this.requireSigner();
        return await this.contract.depositBalance(amount);
    }
    // User/Agent operations
    async claim(data) {
        this.requireSigner();
        return await this.contract.claim(data.provider, data.rootIndex, data.amount, data.merkleProof);
    }
    async batchClaim(claims) {
        this.requireSigner();
        const providers = claims.map(c => c.provider);
        const rootIndices = claims.map(c => c.rootIndex);
        const amounts = claims.map(c => c.amount);
        const merkleProofs = claims.map(c => c.merkleProof);
        return await this.contract.batchClaim(providers, rootIndices, amounts, merkleProofs);
    }
    // Read operations
    async getProviderBalance(provider) {
        return await this.contract.getProviderBalance(provider);
    }
    async getLockedBalance(provider) {
        return await this.contract.getLockedBalance(provider);
    }
    async getEpochInfo(provider, rootIndex) {
        const result = await this.contract.getEpochInfo(provider, rootIndex);
        return {
            root: result.root,
            expiry: Number(result.expiry),
            closed: result.closed,
            totalClaimable: result.totalClaimable,
            claimedAmount: result.claimedAmount,
            providerProofVerified: result.providerProofVerified,
            batchHash: result.batchHash,
        };
    }
    async getEpochCount(provider) {
        return Number(await this.contract.getEpochCount(provider));
    }
    async hasClaimed(provider, rootIndex, user) {
        return await this.contract.claimed(provider, rootIndex, user);
    }
}
