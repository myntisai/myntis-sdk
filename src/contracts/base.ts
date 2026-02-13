import { ethers } from 'ethers';
import type { Address } from '../types/common.js';
import { SignerRequiredError } from '../utils/errors.js';

export abstract class BaseContract {
  protected contract: ethers.Contract;
  protected provider: ethers.Provider;
  protected signer?: ethers.Signer;

  constructor(
    address: Address,
    abi: ethers.InterfaceAbi,
    providerOrSigner: ethers.Provider | ethers.Signer
  ) {
    // Check if it's a signer
    if ('signMessage' in providerOrSigner && typeof (providerOrSigner as any).signMessage === 'function') {
      this.signer = providerOrSigner as ethers.Signer;
      this.provider = (providerOrSigner as ethers.Signer).provider!;
      this.contract = new ethers.Contract(address, abi, this.signer);
    } else {
      this.provider = providerOrSigner as ethers.Provider;
      this.contract = new ethers.Contract(address, abi, this.provider);
    }
  }

  get address(): Address {
    return this.contract.target as Address;
  }

  /**
   * Connect a signer for write operations
   */
  connect(signer: ethers.Signer): this {
    this.signer = signer;
    this.contract = this.contract.connect(signer) as ethers.Contract;
    return this;
  }

  protected requireSigner(): ethers.Signer {
    if (!this.signer) {
      throw new SignerRequiredError('write operations');
    }
    return this.signer;
  }
}
