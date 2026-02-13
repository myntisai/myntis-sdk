import { BaseContract } from './base.js';
import { LIQUIDSTAKINGVAULT_ABI } from '../abi/LiquidStakingVault.js';
export class VaultContract extends BaseContract {
    constructor(address, providerOrSigner) {
        super(address, LIQUIDSTAKINGVAULT_ABI, providerOrSigner);
    }
    // Write operations
    async deposit(assets, receiver) {
        this.requireSigner();
        return await this.contract.deposit(assets, receiver);
    }
    async withdraw(assets, receiver, owner) {
        this.requireSigner();
        return await this.contract.withdraw(assets, receiver, owner);
    }
    async mint(shares, receiver) {
        this.requireSigner();
        return await this.contract.mint(shares, receiver);
    }
    async redeem(shares, receiver, owner) {
        this.requireSigner();
        return await this.contract.redeem(shares, receiver, owner);
    }
    async harvestVaultRewards() {
        this.requireSigner();
        return await this.contract.harvestVaultRewards();
    }
    async compoundRewards() {
        this.requireSigner();
        return await this.contract.compoundRewards();
    }
    // Read operations
    async totalAssets() {
        return await this.contract.totalAssets();
    }
    async convertToShares(assets) {
        return await this.contract.convertToShares(assets);
    }
    async convertToAssets(shares) {
        return await this.contract.convertToAssets(shares);
    }
    async balanceOf(account) {
        return await this.contract.balanceOf(account);
    }
    async maxDeposit(account) {
        return await this.contract.maxDeposit(account);
    }
    async maxWithdraw(owner) {
        return await this.contract.maxWithdraw(owner);
    }
}
