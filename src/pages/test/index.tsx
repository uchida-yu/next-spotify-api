import SpotifyService from '@/infrastructure/service/SpotifyService';
import React from 'react';

export async function getServerSideProps() {
  console.log('getServerSideProps');
  const token = await SpotifyService.getAccessToken();
  return { props: { token } };
}

type PropsType = {
  token: string;
};

export default function Test({ token }: PropsType) {
  return (
    <>
      {token}
      static prop test
    </>
  );
}
