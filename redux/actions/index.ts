import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { State } from '../reducers/reducer.types';
import { GET_POSTS, GET_POST, CREATE_POST, SET_LOADER } from './actions.types';

export const setLoader = (): ThunkAction<void, State, unknown, Action<string>> => (dispatch) => {
  dispatch({ type: SET_LOADER });
};

export const getPosts = (): ThunkAction<void, State, unknown, Action<string>> => async (dispatch) => {
  try {
    dispatch(setLoader());
    const { data } = await axios.get('https://simple-blog-api.crew.red/posts');

    dispatch({
      type: GET_POSTS,
      payload: data,
    });

    dispatch(setLoader());
  } catch (err) {
    console.log(err);
  }
};

export const getPost = (id: string): ThunkAction<void, State, unknown, Action<string>> => async (dispatch) => {
  try {
    dispatch(setLoader());
    const { data } = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: data,
    });

    dispatch(setLoader());
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (title: string, body: string): ThunkAction<void, State, unknown, Action<string>> => async (
  dispatch,
) => {
  try {
    dispatch(setLoader());
    const { data } = await axios.post('https://simple-blog-api.crew.red/posts', {
      title,
      body,
    });

    dispatch({
      type: CREATE_POST,
      payload: data,
    });

    dispatch(setLoader());
  } catch (err) {
    console.log(err);
  }
};
