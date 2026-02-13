import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import { DUALPOOLSTAKING_ABI } from '../abi/DualPoolStaking.js';
import type { Address, Wei, TransactionResult } from '../types/common.js';
import type { PoolInfo, ProviderInfo, PoolType } from '../types/staking.js';

export class StakingContract extends BaseContract {
  constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer) {
    super(address, DUALPOOLSTAKING_ABI, providerOrSigner);
  }

  // Provider operations
  async stakeToProviderPool(amount: Wei): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.stakeToProviderPool(amount);
  }

  async unstakeFromProviderPool(amount: Wei): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.unstakeFromProviderPool(amount);
  }

  async harvestFromEmissions(provider: Address): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.harvestFromEmissions(provider);
  }

  async fundProviderBalance(provider: Address, amount: Wei): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.fundProviderBalance(provider, amount);
  }

  async withdrawProviderEmissions(provider: Address, amount: Wei): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.withdrawProviderEmissions(provider, amount);
  }

  async harvestRewards(user: Address): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.harvestRewards(user);
  }

  // User operations
  async stakeToUserPool(amount: Wei, user: Address): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.stakeToUserPool(amount, user);
  }

  async unstakeFromUserPool(amount: Wei, user: Address): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.unstakeFromUserPool(amount, user);
  }

  // Read operations
  async getProviderInfo(provider: Address): Promise<ProviderInfo> {
    const result = await this.contract.getProviderInfo(provider);
    return {
      stake: result.stake,
      rewardDebt: result.rewardDebt,
      accruedEmissions: result.accruedEmissions,
      isRegistered: result.isRegistered,
    };
  }

  async providerAccruedEmissions(provider: Address): Promise<Wei> {
    return await this.contract.providerAccruedEmissions(provider);
  }

  async getTotalStaked(): Promise<Wei> {
    const providerPool = await this.getProviderPoolStaked();
    const userPool = await this.getUserPoolTotalStaked();
    return providerPool + userPool;
  }

  async getProviderPoolStaked(): Promise<Wei> {
    const poolInfo = await this.getPoolInfo(0); // PoolType.Provider
    return poolInfo.totalStaked;
  }

  async getUserPoolTotalStaked(): Promise<Wei> {
    const poolInfo = await this.getPoolInfo(1); // PoolType.User
    return poolInfo.totalStaked;
  }

  async pendingRewards(user: Address): Promise<Wei> {
    return await this.contract.userPendingRewards(user);
  }

  async getPoolInfo(poolType: PoolType | number): Promise<PoolInfo> {
    const result = await this.contract.getPoolInfo(poolType);
    return {
      totalStaked: result.totalStaked,
      accRewardPerShare: result.accRewardPerShare,
      lastRewardTime: Number(result.lastRewardTime),
      emissionShare: Number(result.emissionShare),
    };
  }
}
