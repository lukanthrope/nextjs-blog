import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/reducers/reducer';
import { getPost } from '../../redux/actions';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PostPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = useSelector((state: State) => state.post);
  const isLoading = useSelector((state: State) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(id as string));
  }, []);

  return (
    <div>
      <Header />
      {isLoading && <h1>loading..</h1>}
      {post && <h2>{post.title}</h2>}
      {!post && <h2>No post found</h2>}

      <Footer />
    </div>
  );
};

export default PostPage;
