import { MyntisAPIClient } from './client.js';
import type { ZKProofRequest, ZKProofResult } from '../types/zk.js';

/**
 * Generate ZK proof via backend API
 */
export async function generateProviderProof(
  client: MyntisAPIClient,
  request: ZKProofRequest
): Promise<ZKProofResult> {
  const response = await client.fetch('/api/zk/generate-provider-proof', {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return response;
}
