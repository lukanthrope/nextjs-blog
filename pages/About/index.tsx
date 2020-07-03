import Head from 'next/head'
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function About(): JSX.Element {
  return (
    <div className="">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>about</h1>
      <Link href="/">
        <a>home</a>
      </Link>
      <Footer />
    </div>
  );
}
