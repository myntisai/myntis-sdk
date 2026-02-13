import type { Address, Wei } from '../types/common.js';
import type { PoolInfo, ProviderInfo } from '../types/staking.js';
import type { EmissionInfo } from '../types/emissions.js';
import type { EpochInfo } from '../types/claims.js';
import type {
  MyntisTokenContract,
  StakingContract,
  EmissionsContract,
  DistributorContract,
  VaultContract,
  RegistryContract,
} from '../contracts/index.js';

export class ReadOperations {
  constructor(
    private token: MyntisTokenContract,
    private staking: StakingContract,
    private emissions: EmissionsContract,
    private distributor: DistributorContract,
    private vault: VaultContract,
    private registry: RegistryContract
  ) {}

  // Emission queries
  async getCurrentEmissionRate(): Promise<Wei> {
    return await this.emissions.getCurrentEmissionRate();
  }

  async getEmissionInfo(): Promise<EmissionInfo> {
    return await this.emissions.getEmissionInfo();
  }

  // Staking pool queries
  async getProviderPoolInfo(): Promise<PoolInfo> {
    return await this.staking.getPoolInfo(0); // PoolType.Provider
  }

  async getUserPoolInfo(): Promise<PoolInfo> {
    return await this.staking.getPoolInfo(1); // PoolType.User
  }

  async getTotalStaked(): Promise<Wei> {
    return await this.staking.getTotalStaked();
  }

  // Token queries
  async getTokenBalance(address: Address): Promise<Wei> {
    return await this.token.balanceOf(address);
  }

  async getTotalSupply(): Promise<Wei> {
    return await this.token.totalSupply();
  }

  // User/Provider queries
  async getPendingRewards(address: Address): Promise<Wei> {
    return await this.staking.pendingRewards(address);
  }

  async getProviderInfo(provider: Address): Promise<ProviderInfo> {
    return await this.staking.getProviderInfo(provider);
  }

  async getProviderAccruedEmissions(provider: Address): Promise<Wei> {
    return await this.staking.providerAccruedEmissions(provider);
  }

  async getProviderDistributorBalance(provider: Address): Promise<Wei> {
    return await this.distributor.getProviderBalance(provider);
  }

  // Epoch/Claim queries
  async getEpochInfo(provider: Address, rootIndex: number): Promise<EpochInfo> {
    return await this.distributor.getEpochInfo(provider, rootIndex);
  }

  async getEpochCount(provider: Address): Promise<number> {
    return await this.distributor.getEpochCount(provider);
  }

  async hasClaimed(provider: Address, rootIndex: number, user: Address): Promise<boolean> {
    return await this.distributor.hasClaimed(provider, rootIndex, user);
  }

  // Vault queries
  async getVaultTotalAssets(): Promise<Wei> {
    return await this.vault.totalAssets();
  }

  async convertToShares(assets: Wei): Promise<Wei> {
    return await this.vault.convertToShares(assets);
  }

  async convertToAssets(shares: Wei): Promise<Wei> {
    return await this.vault.convertToAssets(shares);
  }

  // Global supply queries
  async getGlobalSupply(): Promise<{ totalSupply: Wei; canMint: boolean; maxSupply: Wei }> {
    const totalSupply = await this.registry.getGlobalSupply();
    const maxSupply = await this.registry.maxSupply();
    const canMint = await this.registry.canMint(0n); // Check if any minting is possible
    return { totalSupply, canMint, maxSupply };
  }
}
