// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-yfOBFvrcbb9vCIbB1F88vZu+8UdVpJ9CUhqyp88UVnyUIEVqVdO5G4CUAxNMbPSsCkZnSK1Cl+VuOZeZ4SxiEA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
