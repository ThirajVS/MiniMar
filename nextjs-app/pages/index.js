import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>MiniMar - Smart Shopping List</title>
      </Head>
      <main>
        <h1>Welcome to MiniMar</h1>
        <p>Smart Shopping List & Deal Finder</p>
        <nav>
          <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
        </nav>
      </main>
    </>
  );
}
