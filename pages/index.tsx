import { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import { State, Post } from '../redux/reducers/reducer';
import { getPosts } from '../redux/actions';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

const Home: NextPage = () => {
  const posts = useSelector((state: State) => state.posts);
  const isLoading = useSelector((state: State) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {isLoading && <h1>loading..</h1>}
      {posts &&
        posts.map(({ id, title, body }: Post) => <PostPreview id={id} title={title} body={body} key={id} />).reverse()}
      {!isLoading && posts.length === 0 && <h1>No posts yet</h1>}
      <Footer />
    </div>
  );
};

export default Home;
