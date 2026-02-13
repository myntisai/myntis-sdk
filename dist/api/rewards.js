/**
 * Call backend API to apply AI quality weighting to reward entries
 */
export async function calculateWeightedRewards(client, userRewards, providerAddress, evaluateQuality = true) {
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
    return response.weightedRewards.map((r) => ({
        ...r,
        totalRewards: BigInt(r.totalRewards),
    }));
}
