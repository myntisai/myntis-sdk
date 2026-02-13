export const CHAIN_IDS = {
  BASE_MAINNET: 8453,
  BASE_SEPOLIA: 84532,
} as const;

export const CHAIN_NAMES: Record<number, string> = {
  [CHAIN_IDS.BASE_MAINNET]: 'Base Mainnet',
  [CHAIN_IDS.BASE_SEPOLIA]: 'Base Sepolia',
};

export const DEFAULT_RPC_URLS: Record<number, string> = {
  [CHAIN_IDS.BASE_MAINNET]: 'https://mainnet.base.org',
  [CHAIN_IDS.BASE_SEPOLIA]: 'https://sepolia.base.org',
};
