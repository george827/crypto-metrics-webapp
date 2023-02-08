import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cryptosReducer } from './cryptos/Cryptos';

const reducer = combineReducers({
  cryptos: cryptosReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
