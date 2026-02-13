import type { ZKProofResult } from '../types/zk.js';
import type { RewardEntry } from '../types/claims.js';
/**
 * Generate ZK proof for provider batch distribution
 *
 * This uses the bundled provider_batch circuit and proving key.
 * No backend API required - fully self-sufficient.
 */
export declare function generateProviderBatchProof(entries: RewardEntry[], merkleRoot: string, totalAmount: bigint, chainId: number): Promise<ZKProofResult>;
/**
 * Check if ZK circuit files are available
 */
export declare function isZKProofAvailable(): boolean;
