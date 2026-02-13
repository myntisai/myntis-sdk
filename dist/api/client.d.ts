export declare class MyntisAPIClient {
    private baseUrl;
    private serviceApiKey?;
    private graphqlUrl?;
    private graphqlToken?;
    constructor(config: {
        apiUrl: string;
        serviceApiKey?: string;
        graphqlUrl?: string;
        graphqlToken?: string;
    });
    fetch(path: string, options?: RequestInit): Promise<any>;
    graphql(query: string, variables?: Record<string, any>): Promise<any>;
}
