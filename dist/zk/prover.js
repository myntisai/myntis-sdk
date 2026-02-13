import { groth16 } from 'snarkjs';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
// Get SDK root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SDK_ROOT = join(__dirname, '../..');
/**
 * Generate ZK proof for provider batch distribution
 *
 * This uses the bundled provider_batch circuit and proving key.
 * No backend API required - fully self-sufficient.
 */
export async function generateProviderBatchProof(entries, merkleRoot, totalAmount, chainId) {
    // Prepare circuit inputs
    const users = entries.map(e => e.walletAddress);
    const amounts = entries.map(e => e.totalRewards);
    const scores = entries.map(e => e.qualityMultiplier || 1.0);
    const circuitInputs = {
        users,
        amounts: amounts.map(a => a.toString()),
        scores,
        merkleRoot,
        totalAmount: totalAmount.toString(),
        chainId,
    };
    // Load circuit files from SDK package
    const wasmPath = join(SDK_ROOT, 'zk-circuits', 'provider_batch.wasm');
    const zkeyPath = join(SDK_ROOT, 'zk-circuits', 'provider_batch_final.zkey');
    // Generate proof using snarkjs
    const { proof, publicSignals } = await groth16.fullProve(circuitInputs, wasmPath, zkeyPath);
    // Convert proof to contract format
    const zkProof = {
        a: [proof.pi_a[0], proof.pi_a[1]],
        b: [
            [proof.pi_b[0][1], proof.pi_b[0][0]], // Reverse for Solidity
            [proof.pi_b[1][1], proof.pi_b[1][0]],
        ],
        c: [proof.pi_c[0], proof.pi_c[1]],
    };
    return {
        proof: zkProof,
        publicInputs: publicSignals,
        batchHash: merkleRoot,
        merkleRoot,
    };
}
/**
 * Check if ZK circuit files are available
 */
export function isZKProofAvailable() {
    try {
        const wasmPath = join(SDK_ROOT, 'zk-circuits', 'provider_batch.wasm');
        const zkeyPath = join(SDK_ROOT, 'zk-circuits', 'provider_batch_final.zkey');
        readFileSync(wasmPath);
        readFileSync(zkeyPath);
        return true;
    }
    catch {
        return false;
    }
}
