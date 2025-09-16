# Myntis Minimal SDK

Minimal cross-platform SDK for Myntis MerkleDistributor interactions.

## Install

This package is local; add it to your workspace and build:

```bash
cd packages/myntis-sdk && npm install && npm run build
```

## Usage (Frontend)

```ts
import { loadFrontendConfig, FrontendClient } from "@myntis/sdk";

const cfg = loadFrontendConfig();
const client = new FrontendClient(cfg);
// using wagmi/ethers signer implicitly (injected)
await client.claimRewards(provider, BigInt(rootIndex), BigInt(amountWei), proofArray);
```

## Usage (Backend)

```ts
import { loadBackendConfig, BackendAdminClient } from "@myntis/sdk";

const cfg = loadBackendConfig();
const client = new BackendAdminClient(cfg, process.env.ADMIN_PRIVATE_KEY!);
await client.submitMerkleRoot(merkleRoot, BigInt(expiry));
```

## Env Vars

- Frontend: `NEXT_PUBLIC_MERKLE_DISTRIBUTOR_ADDRESS`, `NEXT_PUBLIC_MYNTIS_TOKEN_ADDRESS`, `NEXT_PUBLIC_CHAIN_ID`
- Backend: `MERKLE_DISTRIBUTOR_ADDRESS`, `MYNTIS_TOKEN_ADDRESS`, `CHAIN_ID`, `RPC_URL`, `ADMIN_PRIVATE_KEY`
,
