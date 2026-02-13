import { getClaimableRewards } from '../api/index.js';
import { SignerRequiredError } from '../utils/errors.js';
export class AgentOperations {
    constructor(token, distributor, vault, vaultAddress, distributorAddress, api, signerAddress) {
        this.token = token;
        this.distributor = distributor;
        this.vault = vault;
        this.vaultAddress = vaultAddress;
        this.distributorAddress = distributorAddress;
        this.api = api;
        this.signerAddress = signerAddress;
    }
    // Claim operations
    async claim(data) {
        return await this.distributor.claim(data);
    }
    async batchClaim(claims) {
        return await this.distributor.batchClaim(claims);
    }
    async getClaimableRewards() {
        if (!this.api || !this.api['graphqlUrl']) {
            console.warn('GraphQL API not configured. Cannot fetch claimable rewards. Providers must implement their own claim tracking.');
            return [];
        }
        if (!this.signerAddress) {
            throw new SignerRequiredError('getClaimableRewards');
        }
        return await getClaimableRewards(this.api, this.signerAddress);
    }
    async claimAll() {
        const rewards = await this.getClaimableRewards();
        const unclaimed = rewards.filter(r => !r.claimed);
        if (unclaimed.length === 0) {
            return null;
        }
        const claims = unclaimed.map(r => ({
            provider: r.provider,
            rootIndex: r.rootIndex,
            amount: BigInt(r.rewardAmount),
            merkleProof: r.merkleProof,
        }));
        return await this.batchClaim(claims);
    }
    async hasClaimed(provider, rootIndex) {
        if (!this.signerAddress) {
            throw new SignerRequiredError('hasClaimed');
        }
        return await this.distributor.hasClaimed(provider, rootIndex, this.signerAddress);
    }
    // Liquid staking vault operations
    async depositToVault(amount) {
        if (!this.signerAddress) {
            throw new SignerRequiredError('depositToVault');
        }
        // First approve vault to spend tokens
        const allowance = await this.token.allowance(this.signerAddress, this.vaultAddress);
        if (allowance < amount) {
            await this.token.approve(this.vaultAddress, amount);
        }
        return await this.vault.deposit(amount, this.signerAddress);
    }
    async withdrawFromVault(amount) {
        if (!this.signerAddress) {
            throw new SignerRequiredError('withdrawFromVault');
        }
        return await this.vault.withdraw(amount, this.signerAddress, this.signerAddress);
    }
    async getVaultShares() {
        if (!this.signerAddress) {
            throw new SignerRequiredError('getVaultShares');
        }
        return await this.vault.balanceOf(this.signerAddress);
    }
    async getVaultValue() {
        const shares = await this.getVaultShares();
        return await this.vault.convertToAssets(shares);
    }
    // Token operations
    async getBalance() {
        if (!this.signerAddress) {
            throw new SignerRequiredError('getBalance');
        }
        return await this.token.balanceOf(this.signerAddress);
    }
    async approveTokens(spender, amount) {
        return await this.token.approve(spender, amount);
    }
}
