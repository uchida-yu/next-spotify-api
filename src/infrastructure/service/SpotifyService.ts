import SpotifyApi from '@/infrastructure/api/SpotifyApi';

export type { NewReleasesResponse } from '@/infrastructure/api/SpotifyApi';

export default class SpotifyService {
  public static async getAccessToken() {
    const response = await SpotifyApi.getAccessToken();
    return response.access_token;
  }

  public static async getNewRelease(market: string, accessToken: string) {
    const response = await SpotifyApi.getNewRelease(market, accessToken);
    return response;
  }
}
