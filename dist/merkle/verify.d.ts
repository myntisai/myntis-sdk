import type { HexString } from '../types/common.js';
/**
 * Verify a Merkle proof client-side
 */
export declare function verifyProof(leaf: HexString, proof: HexString[], root: HexString): boolean;
