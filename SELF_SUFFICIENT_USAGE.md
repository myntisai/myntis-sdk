# 100% Self-Sufficient SDK

The Myntis Protocol SDK is **completely self-sufficient**. No backend APIs, no external dependencies.

## What's Included

✅ **ZK Circuit Files** (bundled)
- `provider_batch.wasm` (2.5MB)
- `provider_batch_final.zkey` (827KB)

✅ **snarkjs** (for proof generation)
✅ **ethers.js** (for contract interaction)
✅ **Merkle tree builder** (exact contract format)

## Runtime Recommendation

- Use `MyntisSDK.fromPrivateKey(...)` for full read/write workflows.
- `MyntisSDK.fromBrowserProvider(...)` is currently best for read-oriented frontend flows.
- Use `MyntisSDK.readOnly(...)` for backend monitoring/indexing without signing.

## Independent Provider Setup

```typescript
import { MyntisSDK } from '@myntis/sdk';

// Zero external dependencies!
const sdk = MyntisSDK.fromPrivateKey(process.env.PROVIDER_KEY!, {
  rpcUrl: 'https://mainnet.base.org',
  // No apiUrl, no serviceApiKey, no graphqlUrl
});

// Generate ZK proofs locally
const result = await sdk.provider.distributeRewards(entries, {
  generateZKProof: true,  // Uses bundled circuit
  expiryDays: 7,
});
```

## How ZK Proof Generation Works

```typescript
// Behind the scenes, the SDK:
// 1. Loads bundled circuit files from zk-circuits/
// 2. Prepares inputs (users, amounts, merkleRoot)
// 3. Calls groth16.fullProve() from snarkjs
// 4. Formats proof for Solidity verifier
// 5. Returns ZKProofResult

// All happening locally - no API calls!
```

## Package Size

- Total SDK: ~4MB (including ZK circuits)
- ZK circuits alone: ~3.3MB
- Core SDK code: ~700KB

Worth it for independence!

## Advanced: Custom Circuit (Optional)

If you want to use your own circuit:

```typescript
import { groth16 } from 'snarkjs';

async function myCustomProofGenerator() {
  const { proof, publicSignals } = await groth16.fullProve(
    inputs,
    'my_circuit.wasm',
    'my_proving_key.zkey'
  );
  return formatProof(proof);
}

// Then pass to distributor manually
await sdk.contracts.distributor.submitMerkleRoot(
  root,
  expiry,
  amount,
  customProof.proof,
  customProof.publicInputs
);
```

## Why This Matters

**Without the SDK**: Providers would need to:
1. Set up their own snarkjs environment
2. Download circuit files separately
3. Write complex proof generation code
4. Handle Solidity proof formatting
5. Manage Merkle tree building
6. Coordinate contract calls

**With the SDK**: `npm install @myntis/sdk` and you're done.

Anyone can become a Myntis provider independently!
