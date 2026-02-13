import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import { encodeLeaf } from './leaf.js';
/**
 * Myntis Merkle Tree builder with exact same format as staking.js:1466
 * Uses sortPairs: true to match contract verification
 */
export class MyntisMerkleTree {
    constructor(entries, chainId) {
        this.entries = entries;
        this.chainId = chainId;
        // Generate leaves using exact contract format
        this.leaves = entries.map(entry => encodeLeaf(entry.walletAddress, entry.totalRewards, chainId));
        // Build tree with sortPairs: true (matches staking.js:1466)
        this.tree = new MerkleTree(this.leaves.map(l => Buffer.from(l.slice(2), 'hex')), keccak256, { sortPairs: true });
    }
    getRoot() {
        return ('0x' + this.tree.getRoot().toString('hex'));
    }
    getProof(index) {
        const leaf = this.leaves[index];
        const proof = this.tree.getHexProof(Buffer.from(leaf.slice(2), 'hex'));
        return proof;
    }
    getProofForAddress(walletAddress) {
        const idx = this.entries.findIndex(e => e.walletAddress.toLowerCase() === walletAddress.toLowerCase());
        if (idx === -1)
            return null;
        return this.getProof(idx);
    }
    /**
     * Returns all entries with merkleProof populated
     */
    getEntriesWithProofs() {
        return this.entries.map((entry, i) => ({
            ...entry,
            merkleProof: this.getProof(i),
            chainId: this.chainId,
        }));
    }
    getTotalAmount() {
        return this.entries.reduce((sum, e) => sum + e.totalRewards, 0n);
    }
    /**
     * Full result object
     */
    getResult() {
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
    verify(leaf, proof) {
        return this.tree.verify(proof.map(p => Buffer.from(p.slice(2), 'hex')), Buffer.from(leaf.slice(2), 'hex'), this.tree.getRoot());
    }
}
