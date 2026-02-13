export declare const GLOBALSUPPLYREGISTRY_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "endpoint_";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "admin_";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "AccessControlBadConfirmation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "neededRole";
        readonly type: "bytes32";
    }];
    readonly name: "AccessControlUnauthorizedAccount";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "current";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "cap";
        readonly type: "uint256";
    }];
    readonly name: "CapExceeded";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidDelegate";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidEndpoint";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidEndpointCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidPeer";
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
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }];
    readonly name: "UnknownPeer";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oldCap";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newCap";
        readonly type: "uint256";
    }];
    readonly name: "CapUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oldNonce";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newNonce";
        readonly type: "uint256";
    }];
    readonly name: "ChainNonceAdvanced";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oldNonce";
        readonly type: "uint256";
    }];
    readonly name: "ChainNonceReset";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oldQuota";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newQuota";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalReserved";
        readonly type: "uint256";
    }];
    readonly name: "ChainQuotaUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oldSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newSupply";
        readonly type: "uint256";
    }];
    readonly name: "ChainReseeded";
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
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "peer";
        readonly type: "bytes32";
    }];
    readonly name: "PeerUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "remainingChainQuota";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalReserved";
        readonly type: "uint256";
    }];
    readonly name: "QuotaConsumed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "requested";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "granted";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newChainQuota";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalReserved";
        readonly type: "uint256";
    }];
    readonly name: "QuotaGranted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "receiver";
        readonly type: "bytes32";
    }];
    readonly name: "QuotaReceiverUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "options";
        readonly type: "bytes";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "refundAddress";
        readonly type: "address";
    }];
    readonly name: "QuotaUpdateOptionsSet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "requiredFee";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }];
    readonly name: "QuotaUpdateSkipped";
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
        readonly internalType: "bytes32";
        readonly name: "previousAdminRole";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "newAdminRole";
        readonly type: "bytes32";
    }];
    readonly name: "RoleAdminChanged";
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
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
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
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RoleRevoked";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "providedNonce";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "expectedNonce";
        readonly type: "uint256";
    }];
    readonly name: "StaleUpdateRejected";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "supplyDelta";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newTotalSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalCrossChainSupply";
        readonly type: "uint256";
    }];
    readonly name: "SupplyUpdated";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "ADMIN_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "DEFAULT_ADMIN_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MSG_QUOTA_REQUEST";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MSG_QUOTA_UPDATE";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MSG_SUPPLY_UPDATE";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "SPOKE_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "TOKEN_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
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
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "canMint";
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
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly name: "chainNonce";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }];
    readonly name: "chainQuota";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }];
    readonly name: "chainSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
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
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint256";
        readonly name: "newSupply";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minNonce";
        readonly type: "uint256";
    }];
    readonly name: "forceSupplySync";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }];
    readonly name: "getChainNonce";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getGlobalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }];
    readonly name: "getRoleAdmin";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "globalCap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
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
    }, {
        readonly internalType: "bytes32";
        readonly name: "guid";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "message";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "executor";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "extraData";
        readonly type: "bytes";
    }];
    readonly name: "lzReceive";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
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
    readonly stateMutability: "view";
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
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }];
    readonly name: "quotaReceivers";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "quotaReceivers";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "quotaUpdateOptions";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "quotaUpdateRefundAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "recordBurn";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "recordMint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "receiver";
        readonly type: "bytes32";
    }];
    readonly name: "registerQuotaReceiver";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "eid";
        readonly type: "uint32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "peer";
        readonly type: "bytes32";
    }];
    readonly name: "registerSpoke";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "registerToken";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
        readonly name: "callerConfirmation";
        readonly type: "address";
    }];
    readonly name: "renounceRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint256";
        readonly name: "newSupply";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "newNonce";
        readonly type: "uint256";
    }];
    readonly name: "reseedChainSupply";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint256";
        readonly name: "newSupply";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "newQuota";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "newNonce";
        readonly type: "uint256";
    }];
    readonly name: "reseedChainSupplyAndQuota";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }];
    readonly name: "resetChainNonce";
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
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint256";
        readonly name: "initialSupply";
        readonly type: "uint256";
    }];
    readonly name: "seedChainSupply";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "chainId";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint256";
        readonly name: "newQuota";
        readonly type: "uint256";
    }];
    readonly name: "setChainQuota";
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
        readonly internalType: "bytes";
        readonly name: "options";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "refundAddress";
        readonly type: "address";
    }];
    readonly name: "setQuotaUpdateOptions";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalCrossChainSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalReservedQuota";
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
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "newCap";
        readonly type: "uint256";
    }];
    readonly name: "updateCap";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "withdrawETH";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
