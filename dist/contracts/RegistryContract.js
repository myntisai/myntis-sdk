import { BaseContract } from './base.js';
import { GLOBALSUPPLYREGISTRY_ABI } from '../abi/GlobalSupplyRegistry.js';
export class RegistryContract extends BaseContract {
    constructor(address, providerOrSigner) {
        super(address, GLOBALSUPPLYREGISTRY_ABI, providerOrSigner);
    }
    // Read operations
    async getGlobalSupply() {
        return await this.contract.getGlobalSupply();
    }
    async canMint(amount) {
        return await this.contract.canMint(amount);
    }
    async maxSupply() {
        return await this.contract.MAX_SUPPLY();
    }
}
