import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const middlewares = [
  thunk,
  promiseMiddleware(),
];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ // eslint-disable-line no-unused-vars
    diff: false, // enable if you want to see diff in state changes
  });
  middlewares.push(logger);
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(rootReducer, enhancer);
