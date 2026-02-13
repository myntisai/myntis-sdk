import type { Address, ContractAddresses } from '../types/common.js';

export const BASE_MAINNET_ADDRESSES: ContractAddresses = {
  myntisToken: '0x7629FD045E1462C9DCD580d0aF31db6D46c5AB47' as Address,
  dualPoolStaking: '0x3CBA95f31B61d9FaAC54D3A8A7fbb926737BB57d' as Address,
  emissionsContract: '0x803f9694bE31D3ACe5792C21ab9F72b69838C0e0' as Address,
  zkMerkleDistributor: '0xfF52fdA700CaF238F9fE3bea3091E863aA00EADc' as Address,
  liquidStakingVault: '0x019cB2AA19465Ca1e140AbeADF13320414031C6B' as Address,
  globalSupplyRegistry: '0xdFb3b8107B33d54BAe402a76BbA1432668B2D896' as Address,
  groth16Verifier: '0x19559C2D4C7c50Bf3D8852b6ecfC0185d3E9796c' as Address,
};

export const BASE_SEPOLIA_ADDRESSES: Partial<ContractAddresses> = {
  // Testnet addresses — populate from env or deployment files
};

export function getDefaultAddresses(chainId: number): ContractAddresses {
  switch (chainId) {
    case 8453:
      return BASE_MAINNET_ADDRESSES;
    default:
      throw new Error(`No default addresses for chainId ${chainId}. Provide addresses in config.`);
  }
}
