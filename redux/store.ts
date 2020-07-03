import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { reducer, State } from '../redux/reducers/reducer';

export const makeStore: MakeStore<State> = () => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<State>(makeStore, { debug: true });
