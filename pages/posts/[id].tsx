import Head from 'next/head';
import { wrapper } from '../../redux/store';
import { getPost } from '../../redux/actions';
import { Post } from '../../redux/reducers/reducer.types';
import { GetSSRPropsContextWithStore, SSRProps } from '../ssrProp.types';

import Header from '../../components/Header';
import Comments from '../../components/Comments';
import { Container, BodyConainer, H1 } from '../../styles';

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props): JSX.Element => {
  const PostRender = (): JSX.Element => (
    <>
      <H1>{post.title}</H1>
      <BodyConainer>{post.body}</BodyConainer>
      <Comments comments={post.comments} />
    </>
  );

  const noPostFound = (): JSX.Element => !post && <H1>No post found</H1>;

  return (
    <>
      <Head>
        <title>{post?.id ? `post #${post.id}` : 'some error'}</title>
      </Head>

      <Header />
      <Container>{post ? PostRender() : noPostFound()}</Container>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }: GetSSRPropsContextWithStore): Promise<SSRProps<Props>> => {
    /* eslint-disable */
    await store.dispatch<any>(getPost(params.id.toString()));
    /* eslint-enable */

    return {
      props: {
        post: store.getState().post,
      },
    };
  },
);

export default PostPage;
