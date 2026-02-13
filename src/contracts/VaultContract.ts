import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import { LIQUIDSTAKINGVAULT_ABI } from '../abi/LiquidStakingVault.js';
import type { Address, Wei, TransactionResult } from '../types/common.js';

export class VaultContract extends BaseContract {
  constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer) {
    super(address, LIQUIDSTAKINGVAULT_ABI, providerOrSigner);
  }

  // Write operations
  async deposit(assets: Wei, receiver: Address): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.deposit(assets, receiver);
  }

  async withdraw(assets: Wei, receiver: Address, owner: Address): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.withdraw(assets, receiver, owner);
  }

  async mint(shares: Wei, receiver: Address): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.mint(shares, receiver);
  }

  async redeem(shares: Wei, receiver: Address, owner: Address): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.redeem(shares, receiver, owner);
  }

  async harvestVaultRewards(): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.harvestVaultRewards();
  }

  async compoundRewards(): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.compoundRewards();
  }

  // Read operations
  async totalAssets(): Promise<Wei> {
    return await this.contract.totalAssets();
  }

  async convertToShares(assets: Wei): Promise<Wei> {
    return await this.contract.convertToShares(assets);
  }

  async convertToAssets(shares: Wei): Promise<Wei> {
    return await this.contract.convertToAssets(shares);
  }

  async balanceOf(account: Address): Promise<Wei> {
    return await this.contract.balanceOf(account);
  }

  async maxDeposit(account: Address): Promise<Wei> {
    return await this.contract.maxDeposit(account);
  }

  async maxWithdraw(owner: Address): Promise<Wei> {
    return await this.contract.maxWithdraw(owner);
  }
}
