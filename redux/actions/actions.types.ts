import { Post } from '../reducers/reducer';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const CREATE_POST = 'CREATE_POST';
export const SET_LOADER = 'SET_LOADER';

type GetPosts = {
  type: typeof GET_POSTS;
  payload: Post[];
};

type GetPost = {
  type: typeof GET_POST;
  payload: Post;
};

type CreatePost = {
  type: typeof CREATE_POST;
  payload: Post;
};

type SetLoader = {
  type: typeof SET_LOADER;
};

export type PostAction = GetPosts | CreatePost | GetPost | SetLoader;
