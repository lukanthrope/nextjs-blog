import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/reducers/reducer.types';
import { getPost } from '../../redux/actions';

import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import { Container, BodyConainer, H1 } from '../../styles';

const PostPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = useSelector((state: State) => state.post);
  const isLoading = useSelector((state: State) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(id as string));
  }, []);

  const PostRender = (): JSX.Element =>
    post && (
      <>
        <H1>{post.title}</H1>
        <BodyConainer>{post.body}</BodyConainer>
      </>
    );

  const noPostFound = (): JSX.Element => !post && !isLoading && <H1>No post found</H1>;

  return (
    <>
      <Head>
        <title>post #{id}</title>
      </Head>

      <Header />
      <Container>
        {isLoading && <Spinner />}
        {PostRender()}
        {noPostFound()}
      </Container>
    </>
  );
};

export default PostPage;
