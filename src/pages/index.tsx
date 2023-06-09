import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import List from '@/components/List';
import SpotifyService from '@/infrastructure/service/SpotifyService';
import { useSetRecoilState } from 'recoil';
import tokenAtom from '@/recoil/token';
import styles from '@/styles/App.module.scss';

type PropsType = {
  token: string;
};

export async function getServerSideProps() {
  const token = await SpotifyService.getAccessToken();
  return { props: { token } };
}

export default function Home({ token }: PropsType) {
  const setToken = useSetRecoilState(tokenAtom);
  setToken(token);
  return (
    <div className={styles.App}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <List />
      </Layout>
    </div>
  );
}
