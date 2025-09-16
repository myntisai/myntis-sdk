import type { SDKConfig } from "./types";

export function requireEnv(value: string | undefined, name: string): string {
  if (!value) throw new Error(`Missing required env: ${name}`);
  return value;
}

export function loadFrontendConfig(): SDKConfig {
  const chainId = Number(process.env.NEXT_PUBLIC_CHAIN_ID || 84532);
  const merkleDistributor = requireEnv(process.env.NEXT_PUBLIC_MERKLE_DISTRIBUTOR_ADDRESS, "NEXT_PUBLIC_MERKLE_DISTRIBUTOR_ADDRESS") as `0x${string}`;
  const myntisToken = process.env.NEXT_PUBLIC_MYNTIS_TOKEN_ADDRESS as `0x${string}` | undefined;
  return {
    network: {
      chainId,
      addresses: { merkleDistributor, myntisToken },
    },
  };
}

export function loadBackendConfig(): SDKConfig {
  const chainId = Number(process.env.CHAIN_ID || process.env.NEXT_PUBLIC_CHAIN_ID || 84532);
  const merkleDistributor = requireEnv(process.env.MERKLE_DISTRIBUTOR_ADDRESS || process.env.NEXT_PUBLIC_MERKLE_DISTRIBUTOR_ADDRESS, "MERKLE_DISTRIBUTOR_ADDRESS") as `0x${string}`;
  const myntisToken = (process.env.MYNTIS_TOKEN_ADDRESS || process.env.NEXT_PUBLIC_MYNTIS_TOKEN_ADDRESS) as `0x${string}` | undefined;
  const rpcUrl = process.env.RPC_URL;
  return {
    network: {
      chainId,
      rpcUrl,
      addresses: { merkleDistributor, myntisToken },
    },
  };
}
