import { MyntisAPIClient } from './client.js';
import type { ClaimableReward } from '../types/claims.js';

/**
 * Get all claimable rewards for a user via GraphQL
 */
export async function getClaimableRewards(
  client: MyntisAPIClient,
  walletAddress: string
): Promise<ClaimableReward[]> {
  const query = `
    query GetClaimableRewards($walletAddress: String!) {
      getClaimableRewards(walletAddress: $walletAddress) {
        id
        batchId
        provider
        merkleRoot
        rootIndex
        rewardAmount
        expiry
        walletAddress
        messageIds
        merkleProof
        claimed
        distributorAddress
        chainId
      }
    }
  `;

  const data = await client.graphql(query, { walletAddress });
  return data.getClaimableRewards || [];
}
