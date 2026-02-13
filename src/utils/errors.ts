export class MyntisSDKError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyntisSDKError';
  }
}

export class ConfigurationError extends MyntisSDKError {
  constructor(message: string) {
    super(message);
    this.name = 'ConfigurationError';
  }
}

export class SignerRequiredError extends MyntisSDKError {
  constructor(operation: string) {
    super(`Signer required for ${operation}. Provide a private key or connect a signer.`);
    this.name = 'SignerRequiredError';
  }
}

export class APIError extends MyntisSDKError {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'APIError';
  }
}

export class ContractError extends MyntisSDKError {
  constructor(message: string, public txHash?: string) {
    super(message);
    this.name = 'ContractError';
  }
}
