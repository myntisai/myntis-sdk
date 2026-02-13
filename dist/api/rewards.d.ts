import { MyntisAPIClient } from './client.js';
import type { RewardEntry } from '../types/claims.js';
export interface WeightedRewardResult {
    weightedRewards: RewardEntry[];
}
/**
 * Call backend API to apply AI quality weighting to reward entries
 */
export declare function calculateWeightedRewards(client: MyntisAPIClient, userRewards: RewardEntry[], providerAddress: string, evaluateQuality?: boolean): Promise<RewardEntry[]>;
