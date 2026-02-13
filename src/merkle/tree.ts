import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import { encodeLeaf } from './leaf.js';
import type { HexString, Wei, Address } from '../types/common.js';
import type { RewardEntry, MerkleTreeResult } from '../types/claims.js';

/**
 * Myntis Merkle Tree builder with exact same format as staking.js:1466
 * Uses sortPairs: true to match contract verification
 */
export class MyntisMerkleTree {
  private tree: MerkleTree;
  private entries: RewardEntry[];
  private leaves: HexString[];
  private chainId: number;

  constructor(entries: RewardEntry[], chainId: number) {
    this.entries = entries;
    this.chainId = chainId;

    // Generate leaves using exact contract format
    this.leaves = entries.map(entry =>
      encodeLeaf(entry.walletAddress, entry.totalRewards, chainId)
    );

    // Build tree with sortPairs: true (matches staking.js:1466)
    this.tree = new MerkleTree(
      this.leaves.map(l => Buffer.from(l.slice(2), 'hex')),
      keccak256,
      { sortPairs: true }
    );
  }

  getRoot(): HexString {
    return ('0x' + this.tree.getRoot().toString('hex')) as HexString;
  }

  getProof(index: number): HexString[] {
    const leaf = this.leaves[index];
    const proof = this.tree.getHexProof(Buffer.from(leaf.slice(2), 'hex'));
    return proof as HexString[];
  }

  getProofForAddress(walletAddress: Address): HexString[] | null {
    const idx = this.entries.findIndex(
      e => e.walletAddress.toLowerCase() === walletAddress.toLowerCase()
    );
    if (idx === -1) return null;
    return this.getProof(idx);
  }

  /**
   * Returns all entries with merkleProof populated
   */
  getEntriesWithProofs(): RewardEntry[] {
    return this.entries.map((entry, i) => ({
      ...entry,
      merkleProof: this.getProof(i),
      chainId: this.chainId,
    }));
  }

  getTotalAmount(): Wei {
    return this.entries.reduce((sum, e) => sum + e.totalRewards, 0n);
  }

  /**
   * Full result object
   */
  getResult(): MerkleTreeResult {
    return {
      root: this.getRoot(),
      leaves: this.leaves,
      entries: this.getEntriesWithProofs(),
      totalAmount: this.getTotalAmount(),
    };
  }

  /**
   * Verify a proof client-side
   */
  verify(leaf: HexString, proof: HexString[]): boolean {
    return this.tree.verify(
      proof.map(p => Buffer.from(p.slice(2), 'hex')),
      Buffer.from(leaf.slice(2), 'hex'),
      this.tree.getRoot()
    );
  }
}
