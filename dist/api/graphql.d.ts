import { MyntisAPIClient } from './client.js';
import type { ClaimableReward } from '../types/claims.js';
/**
 * Get all claimable rewards for a user via GraphQL
 */
export declare function getClaimableRewards(client: MyntisAPIClient, walletAddress: string): Promise<ClaimableReward[]>;
