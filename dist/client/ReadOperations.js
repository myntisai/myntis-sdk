export class ReadOperations {
    constructor(token, staking, emissions, distributor, vault, registry) {
        this.token = token;
        this.staking = staking;
        this.emissions = emissions;
        this.distributor = distributor;
        this.vault = vault;
        this.registry = registry;
    }
    // Emission queries
    async getCurrentEmissionRate() {
        return await this.emissions.getCurrentEmissionRate();
    }
    async getEmissionInfo() {
        return await this.emissions.getEmissionInfo();
    }
    // Staking pool queries
    async getProviderPoolInfo() {
        return await this.staking.getPoolInfo(0); // PoolType.Provider
    }
    async getUserPoolInfo() {
        return await this.staking.getPoolInfo(1); // PoolType.User
    }
    async getTotalStaked() {
        return await this.staking.getTotalStaked();
    }
    // Token queries
    async getTokenBalance(address) {
        return await this.token.balanceOf(address);
    }
    async getTotalSupply() {
        return await this.token.totalSupply();
    }
    // User/Provider queries
    async getPendingRewards(address) {
        return await this.staking.pendingRewards(address);
    }
    async getProviderInfo(provider) {
        return await this.staking.getProviderInfo(provider);
    }
    async getProviderAccruedEmissions(provider) {
        return await this.staking.providerAccruedEmissions(provider);
    }
    async getProviderDistributorBalance(provider) {
        return await this.distributor.getProviderBalance(provider);
    }
    // Epoch/Claim queries
    async getEpochInfo(provider, rootIndex) {
        return await this.distributor.getEpochInfo(provider, rootIndex);
    }
    async getEpochCount(provider) {
        return await this.distributor.getEpochCount(provider);
    }
    async hasClaimed(provider, rootIndex, user) {
        return await this.distributor.hasClaimed(provider, rootIndex, user);
    }
    // Vault queries
    async getVaultTotalAssets() {
        return await this.vault.totalAssets();
    }
    async convertToShares(assets) {
        return await this.vault.convertToShares(assets);
    }
    async convertToAssets(shares) {
        return await this.vault.convertToAssets(shares);
    }
    // Global supply queries
    async getGlobalSupply() {
        const totalSupply = await this.registry.getGlobalSupply();
        const maxSupply = await this.registry.maxSupply();
        const canMint = await this.registry.canMint(0n); // Check if any minting is possible
        return { totalSupply, canMint, maxSupply };
    }
}
