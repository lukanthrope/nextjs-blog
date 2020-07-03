import Head from 'next/head'
import Link from 'next/link';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>about</h1>
      <Link href="/"><a>home</a></Link>
      <Footer />
    </div>
  )
}
