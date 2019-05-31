import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const devtools = process.env.NODE_ENV === 'test'
  ? x => x /* eslint-disable no-underscore-dangle */
  : window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable no-underscore-dangle */

const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware),
  devtools
));
// const store = compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )(createStore)(rootReducer);
console.log(store)
export default store;