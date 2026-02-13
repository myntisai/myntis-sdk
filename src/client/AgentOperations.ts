import type { Address, Wei, TransactionResult } from '../types/common.js';
import type { ClaimData, ClaimableReward } from '../types/claims.js';
import type {
  MyntisTokenContract,
  DistributorContract,
  VaultContract,
} from '../contracts/index.js';
import { MyntisAPIClient, getClaimableRewards } from '../api/index.js';
import { SignerRequiredError } from '../utils/errors.js';

export class AgentOperations {
  constructor(
    private token: MyntisTokenContract,
    private distributor: DistributorContract,
    private vault: VaultContract,
    private vaultAddress: Address,
    private distributorAddress: Address,
    private api?: MyntisAPIClient,
    private signerAddress?: Address
  ) {}

  // Claim operations
  async claim(data: ClaimData): Promise<TransactionResult> {
    return await this.distributor.claim(data);
  }

  async batchClaim(claims: ClaimData[]): Promise<TransactionResult> {
    return await this.distributor.batchClaim(claims);
  }

  async getClaimableRewards(): Promise<ClaimableReward[]> {
    if (!this.api || !this.api['graphqlUrl']) {
      console.warn('GraphQL API not configured. Cannot fetch claimable rewards. Providers must implement their own claim tracking.');
      return [];
    }
    if (!this.signerAddress) {
      throw new SignerRequiredError('getClaimableRewards');
    }
    return await getClaimableRewards(this.api, this.signerAddress);
  }

  async claimAll(): Promise<TransactionResult | null> {
    const rewards = await this.getClaimableRewards();
    const unclaimed = rewards.filter(r => !r.claimed);

    if (unclaimed.length === 0) {
      return null;
    }

    const claims: ClaimData[] = unclaimed.map(r => ({
      provider: r.provider,
      rootIndex: r.rootIndex,
      amount: BigInt(r.rewardAmount),
      merkleProof: r.merkleProof,
    }));

    return await this.batchClaim(claims);
  }

  async hasClaimed(provider: Address, rootIndex: number): Promise<boolean> {
    if (!this.signerAddress) {
      throw new SignerRequiredError('hasClaimed');
    }
    return await this.distributor.hasClaimed(provider, rootIndex, this.signerAddress);
  }

  // Liquid staking vault operations
  async depositToVault(amount: Wei): Promise<TransactionResult> {
    if (!this.signerAddress) {
      throw new SignerRequiredError('depositToVault');
    }

    // First approve vault to spend tokens
    const allowance = await this.token.allowance(this.signerAddress, this.vaultAddress);
    if (allowance < amount) {
      await this.token.approve(this.vaultAddress, amount);
    }

    return await this.vault.deposit(amount, this.signerAddress);
  }

  async withdrawFromVault(amount: Wei): Promise<TransactionResult> {
    if (!this.signerAddress) {
      throw new SignerRequiredError('withdrawFromVault');
    }
    return await this.vault.withdraw(amount, this.signerAddress, this.signerAddress);
  }

  async getVaultShares(): Promise<Wei> {
    if (!this.signerAddress) {
      throw new SignerRequiredError('getVaultShares');
    }
    return await this.vault.balanceOf(this.signerAddress);
  }

  async getVaultValue(): Promise<Wei> {
    const shares = await this.getVaultShares();
    return await this.vault.convertToAssets(shares);
  }

  // Token operations
  async getBalance(): Promise<Wei> {
    if (!this.signerAddress) {
      throw new SignerRequiredError('getBalance');
    }
    return await this.token.balanceOf(this.signerAddress);
  }

  async approveTokens(spender: Address, amount: Wei): Promise<TransactionResult> {
    return await this.token.approve(spender, amount);
  }
}
