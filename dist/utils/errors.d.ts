export declare class MyntisSDKError extends Error {
    constructor(message: string);
}
export declare class ConfigurationError extends MyntisSDKError {
    constructor(message: string);
}
export declare class SignerRequiredError extends MyntisSDKError {
    constructor(operation: string);
}
export declare class APIError extends MyntisSDKError {
    statusCode?: number | undefined;
    constructor(message: string, statusCode?: number | undefined);
}
export declare class ContractError extends MyntisSDKError {
    txHash?: string | undefined;
    constructor(message: string, txHash?: string | undefined);
}
