// Generated from GlobalSupplyRegistry.json
export const GLOBALSUPPLYREGISTRY_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "endpoint_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "admin_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AccessControlBadConfirmation",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "neededRole",
        "type": "bytes32"
      }
    ],
    "name": "AccessControlUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "current",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "cap",
        "type": "uint256"
      }
    ],
    "name": "CapExceeded",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidDelegate",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidEndpoint",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidEndpointCall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidPeer",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      }
    ],
    "name": "NoPeer",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "OnlyEndpoint",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "sender",
        "type": "bytes32"
      }
    ],
    "name": "OnlyPeer",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      }
    ],
    "name": "UnknownPeer",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldCap",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newCap",
        "type": "uint256"
      }
    ],
    "name": "CapUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldNonce",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newNonce",
        "type": "uint256"
      }
    ],
    "name": "ChainNonceAdvanced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldNonce",
        "type": "uint256"
      }
    ],
    "name": "ChainNonceReset",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldQuota",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newQuota",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalReserved",
        "type": "uint256"
      }
    ],
    "name": "ChainQuotaUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldSupply",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newSupply",
        "type": "uint256"
      }
    ],
    "name": "ChainReseeded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "peer",
        "type": "bytes32"
      }
    ],
    "name": "PeerSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "peer",
        "type": "bytes32"
      }
    ],
    "name": "PeerUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "remainingChainQuota",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalReserved",
        "type": "uint256"
      }
    ],
    "name": "QuotaConsumed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requested",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "granted",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newChainQuota",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalReserved",
        "type": "uint256"
      }
    ],
    "name": "QuotaGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "receiver",
        "type": "bytes32"
      }
    ],
    "name": "QuotaReceiverUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "options",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "refundAddress",
        "type": "address"
      }
    ],
    "name": "QuotaUpdateOptionsSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requiredFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "name": "QuotaUpdateSkipped",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "providedNonce",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "expectedNonce",
        "type": "uint256"
      }
    ],
    "name": "StaleUpdateRejected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "supplyDelta",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newTotalSupply",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalCrossChainSupply",
        "type": "uint256"
      }
    ],
    "name": "SupplyUpdated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MSG_QUOTA_REQUEST",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MSG_QUOTA_UPDATE",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MSG_SUPPLY_UPDATE",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "SPOKE_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOKEN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "internalType": "struct Origin",
        "name": "origin",
        "type": "tuple"
      }
    ],
    "name": "allowInitializePath",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "canMint",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "name": "chainNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      }
    ],
    "name": "chainQuota",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      }
    ],
    "name": "chainSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "endpoint",
    "outputs": [
      {
        "internalType": "contract ILayerZeroEndpointV2",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "newSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minNonce",
        "type": "uint256"
      }
    ],
    "name": "forceSupplySync",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      }
    ],
    "name": "getChainNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getGlobalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "globalCap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "internalType": "struct Origin",
        "name": "",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      },
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      }
    ],
    "name": "isComposeMsgSender",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "internalType": "struct Origin",
        "name": "origin",
        "type": "tuple"
      },
      {
        "internalType": "bytes32",
        "name": "guid",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "message",
        "type": "bytes"
      },
      {
        "internalType": "address",
        "name": "executor",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "extraData",
        "type": "bytes"
      }
    ],
    "name": "lzReceive",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "nextNonce",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "nonce",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oAppVersion",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "senderVersion",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "receiverVersion",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      }
    ],
    "name": "peers",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "peer",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      }
    ],
    "name": "quotaReceivers",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "quotaReceivers",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "quotaUpdateOptions",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "quotaUpdateRefundAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "recordBurn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "recordMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "receiver",
        "type": "bytes32"
      }
    ],
    "name": "registerQuotaReceiver",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "peer",
        "type": "bytes32"
      }
    ],
    "name": "registerSpoke",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "registerToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "callerConfirmation",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "newSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newNonce",
        "type": "uint256"
      }
    ],
    "name": "reseedChainSupply",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "newSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newQuota",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newNonce",
        "type": "uint256"
      }
    ],
    "name": "reseedChainSupplyAndQuota",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      }
    ],
    "name": "resetChainNonce",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "initialSupply",
        "type": "uint256"
      }
    ],
    "name": "seedChainSupply",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "chainId",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "newQuota",
        "type": "uint256"
      }
    ],
    "name": "setChainQuota",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_delegate",
        "type": "address"
      }
    ],
    "name": "setDelegate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "_peer",
        "type": "bytes32"
      }
    ],
    "name": "setPeer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "options",
        "type": "bytes"
      },
      {
        "internalType": "address",
        "name": "refundAddress",
        "type": "address"
      }
    ],
    "name": "setQuotaUpdateOptions",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalCrossChainSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalReservedQuota",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newCap",
        "type": "uint256"
      }
    ],
    "name": "updateCap",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawETH",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
] as const;
