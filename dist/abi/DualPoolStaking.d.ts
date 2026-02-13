export declare const DUALPOOLSTAKING_ABI: readonly [{
    readonly inputs: readonly [];
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
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "implementation";
        readonly type: "address";
    }];
    readonly name: "ERC1967InvalidImplementation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ERC1967NonPayable";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FailedCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidInitialization";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
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
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "slot";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "oldEmissions";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newEmissions";
        readonly type: "address";
    }];
    readonly name: "EmissionsContractUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "version";
        readonly type: "uint64";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "oldVault";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newVault";
        readonly type: "address";
    }];
    readonly name: "LiquidStakingVaultUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oldStake";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newStake";
        readonly type: "uint256";
    }];
    readonly name: "MinProviderStakeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "enum DualPoolStaking.PoolType";
        readonly name: "poolType";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newPendingTreasury";
        readonly type: "uint256";
    }];
    readonly name: "PendingRewardsReset";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "enum DualPoolStaking.PoolType";
        readonly name: "poolType";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalStaked";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "accRewardPerShare";
        readonly type: "uint256";
    }];
    readonly name: "PoolUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "distributor";
        readonly type: "address";
    }];
    readonly name: "ProviderBalanceFunded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalAccrued";
        readonly type: "uint256";
    }];
    readonly name: "ProviderEmissionsAccrued";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "ProviderEmissionsWithdrawn";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "RewardNotified";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "enum DualPoolStaking.PoolType";
        readonly name: "poolType";
        readonly type: "uint8";
    }];
    readonly name: "RewardsHarvested";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "providerAmount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "userAmount";
        readonly type: "uint256";
    }];
    readonly name: "RewardsQueued";
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
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "enum DualPoolStaking.PoolType";
        readonly name: "poolType";
        readonly type: "uint8";
    }];
    readonly name: "Staked";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalPending";
        readonly type: "uint256";
    }];
    readonly name: "TreasuryRewardsQueued";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "oldTreasury";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newTreasury";
        readonly type: "address";
    }];
    readonly name: "TreasuryUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "treasury";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "TreasuryWithdrawal";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "providerAmount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "userAmount";
        readonly type: "uint256";
    }];
    readonly name: "UnclaimedRewardsSentToTreasury";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "enum DualPoolStaking.PoolType";
        readonly name: "poolType";
        readonly type: "uint8";
    }];
    readonly name: "Unstaked";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "implementation";
        readonly type: "address";
    }];
    readonly name: "Upgraded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "oldDistributor";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newDistributor";
        readonly type: "address";
    }];
    readonly name: "ZkMerkleDistributorUpdated";
    readonly type: "event";
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
    readonly name: "EMISSIONS_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PRECISION";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "UPGRADER_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "UPGRADE_INTERFACE_VERSION";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "emissionsContract";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "fundProviderBalance";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum DualPoolStaking.PoolType";
        readonly name: "poolType";
        readonly type: "uint8";
    }];
    readonly name: "getPoolInfo";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalStaked";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "accRewardPerShare";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastRewardTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "emissionShare";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalRewards";
            readonly type: "uint256";
        }];
        readonly internalType: "struct DualPoolStaking.PoolInfo";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }];
    readonly name: "getProviderInfo";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "stake";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "rewardDebt";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getProviderPoolStaked";
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
    readonly name: "getTotalStaked";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getUserPoolTotalStaked";
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
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }];
    readonly name: "harvestFromEmissions";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "harvestRewards";
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
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_emissionsContract";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "admin";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "liquidStakingVault";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "minProviderStake";
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
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "notifyReward";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }];
    readonly name: "pendingEmissionRewards";
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
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "pendingRewards";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "pending";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pendingTreasuryWithdrawal";
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
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "providerAccruedEmissions";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "providerPendingRewards";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "providerPool";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "totalStaked";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "accRewardPerShare";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastRewardTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "emissionShare";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "totalRewards";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "reinitializeV2";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "reinitializeV3";
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
        readonly internalType: "enum DualPoolStaking.PoolType";
        readonly name: "targetPool";
        readonly type: "uint8";
    }];
    readonly name: "resetPendingRewards";
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
        readonly internalType: "address";
        readonly name: "_emissionsContract";
        readonly type: "address";
    }];
    readonly name: "setEmissionsContract";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_liquidStakingVault";
        readonly type: "address";
    }];
    readonly name: "setLiquidStakingVault";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_treasury";
        readonly type: "address";
    }];
    readonly name: "setTreasury";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_zkMerkleDistributor";
        readonly type: "address";
    }];
    readonly name: "setZkMerkleDistributor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "stakeToProviderPool";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "stakeToUserPool";
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
    readonly name: "syncEmissions";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "totalRewards_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "token";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalProviderAccruedEmissions";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "treasury";
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
    readonly name: "unstakeFromProviderPool";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "unstakeFromUserPool";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_minStake";
        readonly type: "uint256";
    }];
    readonly name: "updateMinProviderStake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "updatePools";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newImplementation";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "userInfo";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "rewardDebt";
        readonly type: "uint256";
    }, {
        readonly internalType: "enum DualPoolStaking.PoolType";
        readonly name: "poolType";
        readonly type: "uint8";
    }, {
        readonly internalType: "bool";
        readonly name: "isProvider";
        readonly type: "bool";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastStakeTime";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "userPendingRewards";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "userPool";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "totalStaked";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "accRewardPerShare";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastRewardTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "emissionShare";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "totalRewards";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "wasEverProvider";
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
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "withdrawProviderEmissions";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "withdrawTreasuryRewards";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "zkMerkleDistributor";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
