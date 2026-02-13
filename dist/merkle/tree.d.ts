import type { HexString, Wei, Address } from '../types/common.js';
import type { RewardEntry, MerkleTreeResult } from '../types/claims.js';
/**
 * Myntis Merkle Tree builder with exact same format as staking.js:1466
 * Uses sortPairs: true to match contract verification
 */
export declare class MyntisMerkleTree {
    private tree;
    private entries;
    private leaves;
    private chainId;
    constructor(entries: RewardEntry[], chainId: number);
    getRoot(): HexString;
    getProof(index: number): HexString[];
    getProofForAddress(walletAddress: Address): HexString[] | null;
    /**
     * Returns all entries with merkleProof populated
     */
    getEntriesWithProofs(): RewardEntry[];
    getTotalAmount(): Wei;
    /**
     * Full result object
     */
    getResult(): MerkleTreeResult;
    /**
     * Verify a proof client-side
     */
    verify(leaf: HexString, proof: HexString[]): boolean;
}
