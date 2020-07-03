import Head from 'next/head';
import { useSelector } from 'react-redux';

import Footer from '../components/Footer';

function Home(): JSX.Element {
  const k = useSelector((state: any) => state.title);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{k}</p>
      <Footer />
    </div>
  );
}

export default Home;
