import { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import { State, Post } from '../redux/reducers/reducer.types';
import { getPosts } from '../redux/actions';

import Header from '../components/Header';
import PostPreview from '../components/PostPreview';
import Spinner from '../components/Spinner';
import { Container } from '../styles';

const Home: NextPage = () => {
  const posts = useSelector((state: State) => state.posts);
  const isLoading = useSelector((state: State) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const RenderPosts = (): JSX.Element[] =>
    posts &&
    posts.map(({ id, title, body }: Post) => <PostPreview id={id} title={title} body={body} key={id} />).reverse();

  const noPosts = (): JSX.Element => posts.length === 0 && !isLoading && <h2>No post found</h2>;

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>
        {isLoading && <Spinner />}
        {RenderPosts()}
        {noPosts()}
      </Container>
    </>
  );
};

export default Home;
