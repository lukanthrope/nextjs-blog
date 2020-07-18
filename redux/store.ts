import { createStore, applyMiddleware, Action } from 'redux';
import thunk from 'redux-thunk';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { reducer } from '../redux/reducers/reducer';
import { State } from '../redux/reducers/reducer.types';

export const makeStore: MakeStore<State, Action<string>> = () => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<State, Action<string>>(makeStore, { debug: true });
