import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import { MYNTIS_ABI } from '../abi/Myntis.js';
import type { Address, Wei, TransactionResult } from '../types/common.js';

export class MyntisTokenContract extends BaseContract {
  constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer) {
    super(address, MYNTIS_ABI, providerOrSigner);
  }

  // Read operations
  async balanceOf(account: Address): Promise<Wei> {
    return await this.contract.balanceOf(account);
  }

  async totalSupply(): Promise<Wei> {
    return await this.contract.totalSupply();
  }

  async allowance(owner: Address, spender: Address): Promise<Wei> {
    return await this.contract.allowance(owner, spender);
  }

  async decimals(): Promise<number> {
    return await this.contract.decimals();
  }

  async name(): Promise<string> {
    return await this.contract.name();
  }

  async symbol(): Promise<string> {
    return await this.contract.symbol();
  }

  // Write operations
  async transfer(to: Address, amount: Wei): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.transfer(to, amount);
  }

  async approve(spender: Address, amount: Wei): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.approve(spender, amount);
  }

  async transferFrom(from: Address, to: Address, amount: Wei): Promise<TransactionResult> {
    this.requireSigner();
    return await this.contract.transferFrom(from, to, amount);
  }
}
