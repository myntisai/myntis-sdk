import { MyntisAPIClient } from './client.js';
import type { ZKProofRequest, ZKProofResult } from '../types/zk.js';
/**
 * Generate ZK proof via backend API
 */
export declare function generateProviderProof(client: MyntisAPIClient, request: ZKProofRequest): Promise<ZKProofResult>;
