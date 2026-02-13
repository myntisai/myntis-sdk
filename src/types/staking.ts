import type { Wei } from './common.js';

export enum PoolType {
  Provider = 0,
  User = 1,
}

export interface PoolInfo {
  totalStaked: Wei;
  accRewardPerShare: Wei;
  lastRewardTime: number;
  emissionShare: number;
}

export interface ProviderInfo {
  stake: Wei;
  rewardDebt: Wei;
  accruedEmissions: Wei;
  isRegistered: boolean;
}

export interface UserStakeInfo {
  amount: Wei;
  rewardDebt: Wei;
  pendingRewards: Wei;
}
