import HttpClient from '@/core/HttpClient/HttpClient';
import https from 'https';

export default class SpotifyApi {
  public static getAccessToken() {
    const headers = {
      Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    return HttpClient.post<AccessToken>('https://accounts.spotify.com/api/token', {
      headers,
      body: 'grant_type=client_credentials',
      agent,
    });
  }

  public static getNewRelease(market: string, accessToken: string) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return HttpClient.get<NewReleasesResponse>(
      `https://api.spotify.com/v1/browse/new-releases?market=${market}`,
      headers,
    );
  }
}

export type AccessToken = {
  access_token: string;
};

export type Artist = {
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type Album = {
  album_group: string;
  album_type: string;
  artists: Artist[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: 10;
  type: string;
  uri: string;
};

export type NewReleasesResponse = {
  albums: {
    href: string;
    items: Album[];
    limit: 20;
    next: string;
    offset: 0;
    previous: null;
    total: 100;
  };
};
