import { MyntisAPIClient } from './client.js';
import type { RewardEntry } from '../types/claims.js';

export interface WeightedRewardResult {
  weightedRewards: RewardEntry[];
}

/**
 * Call backend API to apply AI quality weighting to reward entries
 */
export async function calculateWeightedRewards(
  client: MyntisAPIClient,
  userRewards: RewardEntry[],
  providerAddress: string,
  evaluateQuality: boolean = true
): Promise<RewardEntry[]> {
  const response = await client.fetch('/api/rewards/calculate-weighted', {
    method: 'POST',
    body: JSON.stringify({
      userRewards: userRewards.map(r => ({
        userId: r.userId,
        walletAddress: r.walletAddress,
        totalRewards: r.totalRewards.toString(),
        messageIds: r.messageIds || [],
      })),
      providerAddress,
      evaluateQuality,
    }),
  });

  // Convert string amounts back to bigint
  return response.weightedRewards.map((r: any) => ({
    ...r,
    totalRewards: BigInt(r.totalRewards),
  }));
}
