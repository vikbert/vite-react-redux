import { compose, createStore } from 'redux';
import rootReducer, { rootState } from './storeReducer';

export default function configureStore() {
  let composerEnhancers = () => true;
  if (process.env.NODE_ENV === 'development') {
    composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  return createStore(rootReducer, rootState, composerEnhancers());
}
