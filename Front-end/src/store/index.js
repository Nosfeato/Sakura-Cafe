/**
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer';

import ajaxMiddleware from './middlewares/ajax';

/**
 * Store
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddleware),
);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  enhancers,
);


/* eslint-enable */

/**
 * Export
 */
export default store;
