/**
 * Get all claimable rewards for a user via GraphQL
 */
export async function getClaimableRewards(client, walletAddress) {
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
