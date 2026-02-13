import { BaseContract } from './base.js';
import { DUALPOOLSTAKING_ABI } from '../abi/DualPoolStaking.js';
export class StakingContract extends BaseContract {
    constructor(address, providerOrSigner) {
        super(address, DUALPOOLSTAKING_ABI, providerOrSigner);
    }
    // Provider operations
    async stakeToProviderPool(amount) {
        this.requireSigner();
        return await this.contract.stakeToProviderPool(amount);
    }
    async unstakeFromProviderPool(amount) {
        this.requireSigner();
        return await this.contract.unstakeFromProviderPool(amount);
    }
    async harvestFromEmissions(provider) {
        this.requireSigner();
        return await this.contract.harvestFromEmissions(provider);
    }
    async fundProviderBalance(provider, amount) {
        this.requireSigner();
        return await this.contract.fundProviderBalance(provider, amount);
    }
    async withdrawProviderEmissions(provider, amount) {
        this.requireSigner();
        return await this.contract.withdrawProviderEmissions(provider, amount);
    }
    async harvestRewards(user) {
        this.requireSigner();
        return await this.contract.harvestRewards(user);
    }
    // User operations
    async stakeToUserPool(amount, user) {
        this.requireSigner();
        return await this.contract.stakeToUserPool(amount, user);
    }
    async unstakeFromUserPool(amount, user) {
        this.requireSigner();
        return await this.contract.unstakeFromUserPool(amount, user);
    }
    // Read operations
    async getProviderInfo(provider) {
        const result = await this.contract.getProviderInfo(provider);
        return {
            stake: result.stake,
            rewardDebt: result.rewardDebt,
            accruedEmissions: result.accruedEmissions,
            isRegistered: result.isRegistered,
        };
    }
    async providerAccruedEmissions(provider) {
        return await this.contract.providerAccruedEmissions(provider);
    }
    async getTotalStaked() {
        const providerPool = await this.getProviderPoolStaked();
        const userPool = await this.getUserPoolTotalStaked();
        return providerPool + userPool;
    }
    async getProviderPoolStaked() {
        const poolInfo = await this.getPoolInfo(0); // PoolType.Provider
        return poolInfo.totalStaked;
    }
    async getUserPoolTotalStaked() {
        const poolInfo = await this.getPoolInfo(1); // PoolType.User
        return poolInfo.totalStaked;
    }
    async pendingRewards(user) {
        return await this.contract.userPendingRewards(user);
    }
    async getPoolInfo(poolType) {
        const result = await this.contract.getPoolInfo(poolType);
        return {
            totalStaked: result.totalStaked,
            accRewardPerShare: result.accRewardPerShare,
            lastRewardTime: Number(result.lastRewardTime),
            emissionShare: Number(result.emissionShare),
        };
    }
}
