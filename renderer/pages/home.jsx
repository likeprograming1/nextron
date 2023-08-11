import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

function Home() {
  const [data, setData] = useState("");

  useEffect(()=>{
    axios.get('http://localhost:8000/')
    .then(res => {
      setData(res.data.message);
    })
  })
 
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
        {data ? data : null}
      </div>
    </React.Fragment>
  );
};

export default Home;
