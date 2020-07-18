import Head from 'next/head';
import { wrapper } from '../redux/store';
import { Post } from '../redux/reducers/reducer.types';
import { getPosts } from '../redux/actions';
import { GetSSRPropsContextWithStore, SSRProps } from './ssrProp.types';

import Header from '../components/Header';
import PostPreview from '../components/PostPreview';
import { Container } from '../styles';

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props): JSX.Element => {
  const RenderPosts = (): JSX.Element[] =>
    posts.map(({ id, title, body }: Post) => <PostPreview id={id} title={title} body={body} key={id} />).reverse();

  const noPosts = (): JSX.Element => posts.length === 0 && <h2>No post found</h2>;

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>{posts.length > 0 ? RenderPosts() : noPosts()}</Container>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: GetSSRPropsContextWithStore): Promise<SSRProps<Props>> => {
    /* eslint-disable */
    await store.dispatch<any>(getPosts());
    /* eslint-enable */

    return {
      props: {
        posts: store.getState().posts,
      },
    };
  },
);

/*
Home.getInitialProps = async ({ store }: any) => {
  await store.dispatch(getPosts());
  return {
    posts: store.getState().posts,
  };
};

*/

export default Home;
