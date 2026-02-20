# Myntis Protocol SDK

**Fully self-sufficient** TypeScript SDK for interacting with the Myntis protocol on Base L2. No Myntis backend API required.

## Features

✅ **100% Self-Sufficient** - No external APIs needed
✅ **Built-in ZK Proof Generation** - Bundled circuit + snarkjs
✅ **Complete Contract Coverage** - All 6 core contracts
✅ **Merkle Tree Builder** - Exact contract-compatible format
✅ **Liquid Staking** - ERC-4626 vault operations
✅ **Multi-Environment** - Node.js + browser read support

## Installation

```bash
npm install @myntis/sdk
```

The SDK includes ZK circuit files (~3MB) for proof generation.

## Runtime Modes

```typescript
// Full read + write (recommended for providers/agents)
MyntisSDK.fromPrivateKey(privateKey, { rpcUrl: 'https://mainnet.base.org' });

// Browser provider (currently read-oriented; write ops require signer wiring)
MyntisSDK.fromBrowserProvider(window.ethereum);

// Read-only mode
MyntisSDK.readOnly('https://mainnet.base.org');
```

If you need guaranteed write operations today, use `fromPrivateKey`.

## Quick Start

### Provider (Full Distribution with ZK Proofs)

```typescript
import { MyntisSDK } from '@myntis/sdk';

// No API keys needed - fully self-sufficient!
const sdk = MyntisSDK.fromPrivateKey(process.env.PROVIDER_KEY!, {
  rpcUrl: 'https://mainnet.base.org',
});

// 1. Harvest emissions
await sdk.provider.harvestEmissions();

// 2. Fund distributor
await sdk.provider.fundDistributor(amount);

// 3. Distribute with ZK proofs (generated locally!)
const entries = [
  { walletAddress: '0x...', totalRewards: 100n * 10n ** 18n },
  { walletAddress: '0x...', totalRewards: 200n * 10n ** 18n },
];

const result = await sdk.provider.distributeRewards(entries, {
  generateZKProof: true,  // Uses bundled circuit - no API needed!
  expiryDays: 7,
});

console.log(`✅ Merkle root: ${result.merkleTree.root}`);
console.log(`✅ ZK proof: ${result.zkProof ? 'Generated' : 'Failed'}`);
console.log(`✅ Root index: ${result.rootIndex}`);
```

### AI Agent (Claiming Rewards)

```typescript
import { MyntisSDK } from '@myntis/sdk';

const sdk = MyntisSDK.fromPrivateKey(process.env.PRIVATE_KEY!, {
  rpcUrl: 'https://mainnet.base.org',
});

// Get balance
const balance = await sdk.agent.getBalance();

// Claim rewards (if you have the claim data)
const claimData = {
  provider: '0xProvider...',
  rootIndex: 5,
  amount: 100n * 10n ** 18n,
  merkleProof: ['0x...', '0x...'],
};
await sdk.agent.claim(claimData);

// Liquid staking
await sdk.agent.depositToVault(1000n * 10n ** 18n);
```

### Frontend (Browser Read Usage)

```typescript
import { MyntisSDK } from '@myntis/sdk';

const sdk = MyntisSDK.fromBrowserProvider(window.ethereum);
const tvl = await sdk.read.getVaultTotalAssets();
console.log('Vault TVL:', tvl.toString());
```

## ZK Proof Generation (Built-in)

The SDK includes:
- `provider_batch.wasm` (2.5MB)
- `provider_batch_final.zkey` (827KB)
- snarkjs for proof generation

**No backend API required!**

```typescript
// Automatic ZK proof generation
const result = await sdk.provider.distributeRewards(entries, {
  generateZKProof: true,  // Uses bundled circuit
});

if (result.zkProof) {
  console.log('✅ ZK proof generated successfully');
  console.log('Proof:', result.zkProof.proof);
  console.log('Public inputs:', result.zkProof.publicInputs);
}
```

## Why ZK Proofs Are Required

Without ZK proofs, the protocol is just yield farming. ZK proofs ensure:
- Providers honestly distribute rewards according to declared strategies
- Users can verify reward calculations without revealing data
- Double-claiming is prevented across chains

**The SDK bundles everything you need** - no external dependencies.

## Contract Addresses (Base Mainnet)

```typescript
{
  myntisToken: '0x7629FD045E1462C9DCD580d0aF31db6D46c5AB47',
  dualPoolStaking: '0x3CBA95f31B61d9FaAC54D3A8A7fbb926737BB57d',
  emissionsContract: '0x803f9694bE31D3ACe5792C21ab9F72b69838C0e0',
  zkMerkleDistributor: '0xfF52fdA700CaF238F9fE3bea3091E863aA00EADc',
  liquidStakingVault: '0x019cB2AA19465Ca1e140AbeADF13320414031C6B',
  globalSupplyRegistry: '0xdFb3b8107B33d54BAe402a76BbA1432668B2D896',
  groth16Verifier: '0x19559C2D4C7c50Bf3D8852b6ecfC0185d3E9796c',
}
```

Base Sepolia has no built-in default addresses in this release. Provide `addresses` explicitly when using `chainId: 84532`.

## API Reference

### sdk.provider (Provider Operations)

| Method | Description |
|--------|-------------|
| `stake(amount)` | Stake MYNT to provider pool |
| `harvestEmissions()` | Harvest from EmissionsContract |
| `fundDistributor(amount)` | Fund ZKMerkleDistributor |
| `distributeRewards(entries, options)` | Full flow: Merkle tree → ZK proof → submit |
| `buildMerkleTree(entries)` | Build Merkle tree (manual) |
| `generateZKProof(entries, root, amount)` | Generate ZK proof (built-in) |

### sdk.agent (User/Agent Operations)

| Method | Description |
|--------|-------------|
| `claim(data)` | Claim single reward |
| `batchClaim(claims)` | Batch claim |
| `depositToVault(amount)` | Deposit MYNT → lsMYNT |
| `withdrawFromVault(amount)` | Burn lsMYNT → MYNT |
| `getBalance()` | MYNT balance |

### sdk.read (Read-Only Queries)

| Method | Description |
|--------|-------------|
| `getCurrentEmissionRate()` | Tokens per second |
| `getTotalStaked()` | Total staked |
| `getProviderAccruedEmissions(address)` | Provider accrued |
| `getVaultTotalAssets()` | Total MYNT in vault |

See SELF_SUFFICIENT_USAGE.md for advanced usage.
See CHANGELOG.md for release history.
