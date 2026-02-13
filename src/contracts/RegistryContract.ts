import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import { GLOBALSUPPLYREGISTRY_ABI } from '../abi/GlobalSupplyRegistry.js';
import type { Address, Wei } from '../types/common.js';

export class RegistryContract extends BaseContract {
  constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer) {
    super(address, GLOBALSUPPLYREGISTRY_ABI, providerOrSigner);
  }

  // Read operations
  async getGlobalSupply(): Promise<Wei> {
    return await this.contract.getGlobalSupply();
  }

  async canMint(amount: Wei): Promise<boolean> {
    return await this.contract.canMint(amount);
  }

  async maxSupply(): Promise<Wei> {
    return await this.contract.MAX_SUPPLY();
  }
}
