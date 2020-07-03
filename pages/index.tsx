import Head from 'next/head';

import Footer from '../components/Footer';

export default function Home(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Footer />
    </div>
  );
}
