import { BonfidaTrade } from './types';

export default class BonfidaApi {
  static URL: string = 'https://lanadex.com/api';

  static async get(path: string) {
    try {
      const response = await fetch(this.URL + path);
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.success ? responseJson.data : null;
      }
    } catch (err) {
      console.log(`Error fetching API ${path}: ${err}`);
    }
    return null;
  }

  static async getRecentTrades(
    marketAddress: string,
  ): Promise<BonfidaTrade[] | null> {
    return BonfidaApi.get(`/trades/address/${marketAddress}`);
  }
}

export const BONFIDA_DATA_FEED = 'https://lanadex.com/api/tv';
