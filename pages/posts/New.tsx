import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

type InputChange = {
  payload: string;
  type: string;
}

const New: NextPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = ({ type, payload }: InputChange): void => {
    if (type === 'TITLE') {
      setTitle(payload);
    }

    if (type === 'BODY') {
      setBody(payload);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (body.trim() !== '' && title.trim() !== '') {
      dispatch(createPost(title, body));
      router.push('/');
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange({ type: 'TITLE', payload: e.target.value })
          }
        />
        <input
          value={body}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange({ type: 'BODY', payload: e.target.value })
          }
        />
        <button type="submit">Post</button>
      </form>

      <Footer />
    </div>
  );
}

export default New;
