export interface SDKAddresses {
  merkleDistributor: `0x${string}`
  myntisToken?: `0x${string}`
}

export interface SDKNetworkConfig {
  chainId: number
  rpcUrl?: string
  addresses: SDKAddresses
}

export interface SDKConfig {
  network: SDKNetworkConfig
}
