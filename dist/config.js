export function requireEnv(value, name) {
    if (!value)
        throw new Error(`Missing required env: ${name}`);
    return value;
}
export function loadFrontendConfig() {
    const chainId = Number(process.env.NEXT_PUBLIC_CHAIN_ID || 84532);
    const merkleDistributor = requireEnv(process.env.NEXT_PUBLIC_MERKLE_DISTRIBUTOR_ADDRESS, "NEXT_PUBLIC_MERKLE_DISTRIBUTOR_ADDRESS");
    const myntisToken = process.env.NEXT_PUBLIC_MYNTIS_TOKEN_ADDRESS;
    return {
        network: {
            chainId,
            addresses: { merkleDistributor, myntisToken },
        },
    };
}
export function loadBackendConfig() {
    const chainId = Number(process.env.CHAIN_ID || process.env.NEXT_PUBLIC_CHAIN_ID || 84532);
    const merkleDistributor = requireEnv(process.env.MERKLE_DISTRIBUTOR_ADDRESS || process.env.NEXT_PUBLIC_MERKLE_DISTRIBUTOR_ADDRESS, "MERKLE_DISTRIBUTOR_ADDRESS");
    const myntisToken = (process.env.MYNTIS_TOKEN_ADDRESS || process.env.NEXT_PUBLIC_MYNTIS_TOKEN_ADDRESS);
    const rpcUrl = process.env.RPC_URL;
    return {
        network: {
            chainId,
            rpcUrl,
            addresses: { merkleDistributor, myntisToken },
        },
    };
}
