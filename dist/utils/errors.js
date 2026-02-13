export class MyntisSDKError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MyntisSDKError';
    }
}
export class ConfigurationError extends MyntisSDKError {
    constructor(message) {
        super(message);
        this.name = 'ConfigurationError';
    }
}
export class SignerRequiredError extends MyntisSDKError {
    constructor(operation) {
        super(`Signer required for ${operation}. Provide a private key or connect a signer.`);
        this.name = 'SignerRequiredError';
    }
}
export class APIError extends MyntisSDKError {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'APIError';
    }
}
export class ContractError extends MyntisSDKError {
    constructor(message, txHash) {
        super(message);
        this.txHash = txHash;
        this.name = 'ContractError';
    }
}
