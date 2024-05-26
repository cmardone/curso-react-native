import {HttpAdapter} from './http-adapter';

interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export class FetchAdapter implements HttpAdapter {
  private baseUrl: string;
  private params: Record<string, string>;

  constructor(options: Options) {
    this.baseUrl = options.baseUrl;
    this.params = options.params;
  }

  private createUrl(url: string): string {
    const endpoint = new URL(`${this.baseUrl}${url}`);
    for (let param in this.params) {
      endpoint.searchParams.append(param, this.params[param]);
    }
    return `${endpoint}`.replace('/?', '?');
  }

  async get<T>(
    url: string,
    options?: Record<string, unknown> | undefined,
  ): Promise<T> {
    const endpoint = this.createUrl(url);
    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      return response.json() as T;
    } catch (err) {
      const error = err as Error;
      throw new Error(`Error fetching get: ${url} (${error.message})`);
    }
  }
}
