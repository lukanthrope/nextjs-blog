import { GET_POSTS, GET_POST, CREATE_POST, SET_LOADER, PostAction } from '../actions/actions.types';
import { State } from './reducer.types';

const initalState: State = {
  isLoading: false,
  posts: [],
  post: null,
};

export function reducer(state = initalState, action: PostAction): State {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case SET_LOADER:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return {
        ...state,
      };
  }
}
