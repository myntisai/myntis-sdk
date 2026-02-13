import { APIError } from '../utils/errors.js';

export class MyntisAPIClient {
  private baseUrl: string;
  private serviceApiKey?: string;
  private graphqlUrl?: string;
  private graphqlToken?: string;

  constructor(config: {
    apiUrl: string;
    serviceApiKey?: string;
    graphqlUrl?: string;
    graphqlToken?: string;
  }) {
    this.baseUrl = config.apiUrl;
    this.serviceApiKey = config.serviceApiKey;
    this.graphqlUrl = config.graphqlUrl;
    this.graphqlToken = config.graphqlToken;
  }

  async fetch(path: string, options: RequestInit = {}): Promise<any> {
    const url = `${this.baseUrl}${path}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...((options.headers as Record<string, string>) || {}),
    };

    if (this.serviceApiKey) {
      headers['X-Service-API-Key'] = this.serviceApiKey;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new APIError(
        `API request failed: ${response.status} ${response.statusText}\n${text}`,
        response.status
      );
    }

    return await response.json();
  }

  async graphql(query: string, variables?: Record<string, any>): Promise<any> {
    if (!this.graphqlUrl) {
      throw new APIError('GraphQL URL not configured');
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.graphqlToken) {
      headers['Authorization'] = `Bearer ${this.graphqlToken}`;
    }

    const response = await fetch(this.graphqlUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new APIError(
        `GraphQL request failed: ${response.status} ${response.statusText}\n${text}`,
        response.status
      );
    }

    const result = await response.json();
    if (result.errors) {
      throw new APIError(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    return result.data;
  }
}
