import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import type { Address, Wei, TransactionResult } from '../types/common.js';
export declare class MyntisTokenContract extends BaseContract {
    constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer);
    balanceOf(account: Address): Promise<Wei>;
    totalSupply(): Promise<Wei>;
    allowance(owner: Address, spender: Address): Promise<Wei>;
    decimals(): Promise<number>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    transfer(to: Address, amount: Wei): Promise<TransactionResult>;
    approve(spender: Address, amount: Wei): Promise<TransactionResult>;
    transferFrom(from: Address, to: Address, amount: Wei): Promise<TransactionResult>;
}
