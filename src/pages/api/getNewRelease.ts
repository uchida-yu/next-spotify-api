import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  token: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const options = {
    headers: {
      Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString(
        'base64',
      )}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
      grant_type: 'client_credentials',
    },
  };
  const api = await fetch('https://accounts.spotify.com/api/token', options);
  const token = JSON.stringify(api);

  res.status(200).json({ token });
}
