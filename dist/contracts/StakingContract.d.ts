import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import type { Address, Wei, TransactionResult } from '../types/common.js';
import type { PoolInfo, ProviderInfo, PoolType } from '../types/staking.js';
export declare class StakingContract extends BaseContract {
    constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer);
    stakeToProviderPool(amount: Wei): Promise<TransactionResult>;
    unstakeFromProviderPool(amount: Wei): Promise<TransactionResult>;
    harvestFromEmissions(provider: Address): Promise<TransactionResult>;
    fundProviderBalance(provider: Address, amount: Wei): Promise<TransactionResult>;
    withdrawProviderEmissions(provider: Address, amount: Wei): Promise<TransactionResult>;
    harvestRewards(user: Address): Promise<TransactionResult>;
    stakeToUserPool(amount: Wei, user: Address): Promise<TransactionResult>;
    unstakeFromUserPool(amount: Wei, user: Address): Promise<TransactionResult>;
    getProviderInfo(provider: Address): Promise<ProviderInfo>;
    providerAccruedEmissions(provider: Address): Promise<Wei>;
    getTotalStaked(): Promise<Wei>;
    getProviderPoolStaked(): Promise<Wei>;
    getUserPoolTotalStaked(): Promise<Wei>;
    pendingRewards(user: Address): Promise<Wei>;
    getPoolInfo(poolType: PoolType | number): Promise<PoolInfo>;
}
