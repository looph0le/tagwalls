import { useState, useEffect } from 'react';
import Nav from './componenets/Nav'
import Head from 'next/head'

export async function fetchLatest() {
  const url = 'https://wallhaven.cc/api/v1/search?sorting=latest';
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return { data };
}

function latest({ data }) {
  const [latestData, setLatestData] = useState(data);

  useEffect(() => {
    async function fetchData() {
      const updatedData = await fetchLatest();
      setLatestData(updatedData.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Tagwalls - Latest</title>
        <meta name="description" content="Latest wallpapers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <h1>Latest Data</h1>
      <pre>{JSON.stringify(latestData, null, 2)}</pre>
    </div>
  );
}

export async function getInitialProps() {
  const data = await fetchLatest();
  return data;
}

export default latest;
