import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import type { Address, Wei, TransactionResult } from '../types/common.js';
export declare class VaultContract extends BaseContract {
    constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer);
    deposit(assets: Wei, receiver: Address): Promise<TransactionResult>;
    withdraw(assets: Wei, receiver: Address, owner: Address): Promise<TransactionResult>;
    mint(shares: Wei, receiver: Address): Promise<TransactionResult>;
    redeem(shares: Wei, receiver: Address, owner: Address): Promise<TransactionResult>;
    harvestVaultRewards(): Promise<TransactionResult>;
    compoundRewards(): Promise<TransactionResult>;
    totalAssets(): Promise<Wei>;
    convertToShares(assets: Wei): Promise<Wei>;
    convertToAssets(shares: Wei): Promise<Wei>;
    balanceOf(account: Address): Promise<Wei>;
    maxDeposit(account: Address): Promise<Wei>;
    maxWithdraw(owner: Address): Promise<Wei>;
}
