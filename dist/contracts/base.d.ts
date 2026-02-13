import { ethers } from 'ethers';
import type { Address } from '../types/common.js';
export declare abstract class BaseContract {
    protected contract: ethers.Contract;
    protected provider: ethers.Provider;
    protected signer?: ethers.Signer;
    constructor(address: Address, abi: ethers.InterfaceAbi, providerOrSigner: ethers.Provider | ethers.Signer);
    get address(): Address;
    /**
     * Connect a signer for write operations
     */
    connect(signer: ethers.Signer): this;
    protected requireSigner(): ethers.Signer;
}
