import { ethers } from 'ethers';
import { SignerRequiredError } from '../utils/errors.js';
export class BaseContract {
    constructor(address, abi, providerOrSigner) {
        // Check if it's a signer
        if ('signMessage' in providerOrSigner && typeof providerOrSigner.signMessage === 'function') {
            this.signer = providerOrSigner;
            this.provider = providerOrSigner.provider;
            this.contract = new ethers.Contract(address, abi, this.signer);
        }
        else {
            this.provider = providerOrSigner;
            this.contract = new ethers.Contract(address, abi, this.provider);
        }
    }
    get address() {
        return this.contract.target;
    }
    /**
     * Connect a signer for write operations
     */
    connect(signer) {
        this.signer = signer;
        this.contract = this.contract.connect(signer);
        return this;
    }
    requireSigner() {
        if (!this.signer) {
            throw new SignerRequiredError('write operations');
        }
        return this.signer;
    }
}
