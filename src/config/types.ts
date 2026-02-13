import type { ContractAddresses } from '../types/common.js';

export interface MyntisSDKConfig {
  /** Chain ID (8453 for Base mainnet, 84532 for Base Sepolia) */
  chainId?: number;

  /** JSON-RPC URL. Required for backend/agent usage. Optional for browser. */
  rpcUrl?: string;

  /** Private key for signing transactions. Required for backend/agent. */
  privateKey?: string;

  /** Contract addresses. Defaults to known mainnet addresses for chainId=8453. */
  addresses?: Partial<ContractAddresses>;

  /** Backend API URL for ZK proof generation and quality weighting. */
  apiUrl?: string;

  /** Service API key for backend API authentication. */
  serviceApiKey?: string;

  /** GraphQL endpoint for claim data. */
  graphqlUrl?: string;

  /** GraphQL auth token. */
  graphqlToken?: string;
}

export interface ResolvedMyntisSDKConfig {
  chainId: number;
  rpcUrl?: string;
  addresses: ContractAddresses;
  apiUrl?: string;
  serviceApiKey?: string;
  graphqlUrl?: string;
  graphqlToken?: string;
}
