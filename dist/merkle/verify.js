import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
/**
 * Verify a Merkle proof client-side
 */
export function verifyProof(leaf, proof, root) {
    const leafBuffer = Buffer.from(leaf.slice(2), 'hex');
    const rootBuffer = Buffer.from(root.slice(2), 'hex');
    const proofBuffers = proof.map(p => Buffer.from(p.slice(2), 'hex'));
    return MerkleTree.verify(proofBuffers, leafBuffer, rootBuffer, keccak256, { sortPairs: true });
}
