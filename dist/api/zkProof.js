/**
 * Generate ZK proof via backend API
 */
export async function generateProviderProof(client, request) {
    const response = await client.fetch('/api/zk/generate-provider-proof', {
        method: 'POST',
        body: JSON.stringify(request),
    });
    return response;
}
