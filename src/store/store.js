import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "../reducers";

import apis from '../middlewares/apis';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware( apis ),
);

const store = createStore(reducer, enhancers);

export default store;