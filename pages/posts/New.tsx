import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions';

import Header from '../../components/Header';
import { Container, Form, Button } from '../../styles';

type InputChange = {
  payload: string;
  type: string;
};

const New: NextPage = () => {
  const TITLE = 'TITLE';
  const BODY = 'BODY';

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = ({ type, payload }: InputChange): void => {
    if (type === TITLE) {
      setTitle(payload);
    }

    if (type === BODY) {
      setBody(payload);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (body.trim() !== '' && title.trim() !== '') {
      dispatch(createPost(title, body));
      router.push('/');
    }

    if (title.trim() === '') {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (body.trim() === '') {
      setBodyError(true);
    } else {
      setBodyError(false);
    }
  };

  return (
    <>
      <Head>
        <title>Create post</title>
      </Head>

      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="title" className={titleError ? 'red' : ''}>
            title
          </label>
          <input
            id="title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ type: TITLE, payload: e.target.value })
            }
          />
          <label htmlFor="body" className={bodyError ? 'red' : ''}>
            body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange({ type: BODY, payload: e.target.value })
            }
          />
          <Button type="submit">Post</Button>
        </Form>
      </Container>
    </>
  );
};

export default New;
