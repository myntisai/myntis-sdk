import { BaseContract } from './base.js';
import { MYNTIS_ABI } from '../abi/Myntis.js';
export class MyntisTokenContract extends BaseContract {
    constructor(address, providerOrSigner) {
        super(address, MYNTIS_ABI, providerOrSigner);
    }
    // Read operations
    async balanceOf(account) {
        return await this.contract.balanceOf(account);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
    async allowance(owner, spender) {
        return await this.contract.allowance(owner, spender);
    }
    async decimals() {
        return await this.contract.decimals();
    }
    async name() {
        return await this.contract.name();
    }
    async symbol() {
        return await this.contract.symbol();
    }
    // Write operations
    async transfer(to, amount) {
        this.requireSigner();
        return await this.contract.transfer(to, amount);
    }
    async approve(spender, amount) {
        this.requireSigner();
        return await this.contract.approve(spender, amount);
    }
    async transferFrom(from, to, amount) {
        this.requireSigner();
        return await this.contract.transferFrom(from, to, amount);
    }
}
