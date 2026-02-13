export declare const MYNTIS_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_lzEndpoint";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_delegate";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountSD";
        readonly type: "uint256";
    }];
    readonly name: "AmountSDOverflowed";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "allowance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "approver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "EnforcedPause";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ExceedsEmissionsAllocation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ExceedsImmediateAllocation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ExceedsMaxSupply";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ExceedsMigrationCap";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ExpectedPause";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FeeTooHigh";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "GlobalCapExceeded";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidDelegate";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidEndpointCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidLocalDecimals";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "options";
        readonly type: "bytes";
    }];
    readonly name: "InvalidOptions";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "LengthMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "LzTokenUnavailable";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MigrationAlreadyComplete";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }];
    readonly name: "NoPeer";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "msgValue";
        readonly type: "uint256";
    }];
    readonly name: "NotEnoughNative";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "addr";
        readonly type: "address";
    }];
    readonly name: "OnlyEndpoint";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "sender";
        readonly type: "bytes32";
    }];
    readonly name: "OnlyPeer";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OnlySelf";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "result";
        readonly type: "bytes";
    }];
    readonly name: "SimulationResult";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountLD";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountLD";
        readonly type: "uint256";
    }];
    readonly name: "SlippageExceeded";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Unauthorized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroAddress";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroAmount";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "BalanceMigrated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oldFee";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newFee";
        readonly type: "uint256";
    }];
    readonly name: "BurnFeeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "oldURI";
        readonly type: "string";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "newURI";
        readonly type: "string";
    }];
    readonly name: "ContractURIUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalEmissions";
        readonly type: "uint256";
    }];
    readonly name: "EmissionsMinted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint16";
            readonly name: "msgType";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "options";
            readonly type: "bytes";
        }];
        readonly indexed: false;
        readonly internalType: "struct EnforcedOptionParam[]";
        readonly name: "_enforcedOptions";
        readonly type: "tuple[]";
    }];
    readonly name: "EnforcedOptionSet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "oldRecipient";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "newRecipient";
        readonly type: "address";
    }];
    readonly name: "FeeRecipientUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousRegistry";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newRegistry";
        readonly type: "address";
    }];
    readonly name: "GlobalSupplyRegistryUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalImmediate";
        readonly type: "uint256";
    }];
    readonly name: "ImmediateMinted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalMigrated";
        readonly type: "uint256";
    }];
    readonly name: "MigrationCompleted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "inspector";
        readonly type: "address";
    }];
    readonly name: "MsgInspectorSet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "guid";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "srcEid";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "toAddress";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountReceivedLD";
        readonly type: "uint256";
    }];
    readonly name: "OFTReceived";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "guid";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "dstEid";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "fromAddress";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountSentLD";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountReceivedLD";
        readonly type: "uint256";
    }];
    readonly name: "OFTSent";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "Paused";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "peer";
        readonly type: "bytes32";
    }];
    readonly name: "PeerSet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "preCrimeAddress";
        readonly type: "address";
    }];
    readonly name: "PreCrimeSet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "RoleGranted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "RoleRevoked";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "Unpaused";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "EMISSIONS_ALLOCATION";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "IMMEDIATE_ALLOCATION";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MAX_MIGRATION_AMOUNT";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MAX_SUPPLY";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MINTER_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PAUSER_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "SEND";
    readonly outputs: readonly [{
        readonly internalType: "uint16";
        readonly name: "";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "SEND_AND_CALL";
    readonly outputs: readonly [{
        readonly internalType: "uint16";
        readonly name: "";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "sender";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly internalType: "struct Origin";
        readonly name: "origin";
        readonly type: "tuple";
    }];
    readonly name: "allowInitializePath";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "approvalRequired";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }];
    readonly name: "burn";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "burnFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_from";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }];
    readonly name: "burnFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "_eid";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint16";
        readonly name: "_msgType";
        readonly type: "uint16";
    }, {
        readonly internalType: "bytes";
        readonly name: "_extraOptions";
        readonly type: "bytes";
    }];
    readonly name: "combineOptions";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "completeMigration";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "contractURI";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "decimalConversionRate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "endpoint";
    readonly outputs: readonly [{
        readonly internalType: "contract ILayerZeroEndpointV2";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint16";
        readonly name: "msgType";
        readonly type: "uint16";
    }];
    readonly name: "enforcedOptions";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "enforcedOption";
        readonly type: "bytes";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "feeRecipient";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getContractInfo";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "name_";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "symbol_";
        readonly type: "string";
    }, {
        readonly internalType: "uint256";
        readonly name: "totalSupply_";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxSupply_";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "emissionsMinted_";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "immediateMinted_";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "paused_";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "globalSupplyRegistry";
    readonly outputs: readonly [{
        readonly internalType: "contract IGlobalSupplyRegistry";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "grantRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "hasRole";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "sender";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly internalType: "struct Origin";
        readonly name: "";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_sender";
        readonly type: "address";
    }];
    readonly name: "isComposeMsgSender";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isHub";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "_eid";
        readonly type: "uint32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_peer";
        readonly type: "bytes32";
    }];
    readonly name: "isPeer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "sender";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly internalType: "struct Origin";
        readonly name: "_origin";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_guid";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_message";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_executor";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "_extraData";
        readonly type: "bytes";
    }];
    readonly name: "lzReceive";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "srcEid";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "sender";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct Origin";
            readonly name: "origin";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct InboundPacket[]";
        readonly name: "_packets";
        readonly type: "tuple[]";
    }];
    readonly name: "lzReceiveAndRevert";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "srcEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "sender";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly internalType: "struct Origin";
        readonly name: "_origin";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_guid";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_message";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_executor";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "_extraData";
        readonly type: "bytes";
    }];
    readonly name: "lzReceiveSimulate";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "recipients";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }];
    readonly name: "migrateMint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "migrationComplete";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }];
    readonly name: "mintEmissions";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }];
    readonly name: "mintImmediate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "msgInspector";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "nextNonce";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "nonce";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oApp";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oAppVersion";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "senderVersion";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "receiverVersion";
        readonly type: "uint64";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oftVersion";
    readonly outputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }, {
        readonly internalType: "uint64";
        readonly name: "version";
        readonly type: "uint64";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "paused";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }];
    readonly name: "peers";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "peer";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "preCrime";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "to";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraOptions";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "composeMsg";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "oftCmd";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SendParam";
        readonly name: "_sendParam";
        readonly type: "tuple";
    }];
    readonly name: "quoteOFT";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxAmountLD";
            readonly type: "uint256";
        }];
        readonly internalType: "struct OFTLimit";
        readonly name: "oftLimit";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "int256";
            readonly name: "feeAmountLD";
            readonly type: "int256";
        }, {
            readonly internalType: "string";
            readonly name: "description";
            readonly type: "string";
        }];
        readonly internalType: "struct OFTFeeDetail[]";
        readonly name: "oftFeeDetails";
        readonly type: "tuple[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountSentLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountReceivedLD";
            readonly type: "uint256";
        }];
        readonly internalType: "struct OFTReceipt";
        readonly name: "oftReceipt";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "to";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraOptions";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "composeMsg";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "oftCmd";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SendParam";
        readonly name: "_sendParam";
        readonly type: "tuple";
    }, {
        readonly internalType: "bool";
        readonly name: "_payInLzToken";
        readonly type: "bool";
    }];
    readonly name: "quoteSend";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lzTokenFee";
            readonly type: "uint256";
        }];
        readonly internalType: "struct MessagingFee";
        readonly name: "msgFee";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "remainingEmissions";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "remainingImmediate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "revokeRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "dstEid";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "to";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraOptions";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "composeMsg";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "oftCmd";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SendParam";
        readonly name: "_sendParam";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lzTokenFee";
            readonly type: "uint256";
        }];
        readonly internalType: "struct MessagingFee";
        readonly name: "_fee";
        readonly type: "tuple";
    }, {
        readonly internalType: "address";
        readonly name: "_refundAddress";
        readonly type: "address";
    }];
    readonly name: "send";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "guid";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "nativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lzTokenFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MessagingFee";
            readonly name: "fee";
            readonly type: "tuple";
        }];
        readonly internalType: "struct MessagingReceipt";
        readonly name: "msgReceipt";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountSentLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountReceivedLD";
            readonly type: "uint256";
        }];
        readonly internalType: "struct OFTReceipt";
        readonly name: "oftReceipt";
        readonly type: "tuple";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_newFee";
        readonly type: "uint256";
    }];
    readonly name: "setBurnFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "_contractURI";
        readonly type: "string";
    }];
    readonly name: "setContractURI";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_delegate";
        readonly type: "address";
    }];
    readonly name: "setDelegate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "eid";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint16";
            readonly name: "msgType";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "options";
            readonly type: "bytes";
        }];
        readonly internalType: "struct EnforcedOptionParam[]";
        readonly name: "_enforcedOptions";
        readonly type: "tuple[]";
    }];
    readonly name: "setEnforcedOptions";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_newRecipient";
        readonly type: "address";
    }];
    readonly name: "setFeeRecipient";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_registry";
        readonly type: "address";
    }];
    readonly name: "setGlobalSupplyRegistry";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_msgInspector";
        readonly type: "address";
    }];
    readonly name: "setMsgInspector";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "_eid";
        readonly type: "uint32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_peer";
        readonly type: "bytes32";
    }];
    readonly name: "setPeer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_preCrime";
        readonly type: "address";
    }];
    readonly name: "setPreCrime";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "sharedDecimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "token";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalMigrated";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalMintedEmissions";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalMintedImmediate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
