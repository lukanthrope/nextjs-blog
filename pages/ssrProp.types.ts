import { Store, Action } from 'redux';
import { GetServerSidePropsContext } from 'next-redux-wrapper';
import { State } from '../redux/reducers/reducer.types';

export type SSRProps<P> = {
  props: P;
};

export type ST = {
  store: Store<State, Action<string>>;
  id?: string;
};

export type GetSSRPropsContextWithStore = GetServerSidePropsContext & ST;
