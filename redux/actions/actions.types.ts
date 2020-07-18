import { Post } from '../reducers/reducer.types';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const CREATE_POST = 'CREATE_POST';

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

export type PostAction = GetPosts | CreatePost | GetPost;
