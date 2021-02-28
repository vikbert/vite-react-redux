import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer, { rootState } from './storeReducer';
import createSagaMiddleware from 'redux-saga';
import bookSaga from '../Books/bookSage';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  let composerEnhancers = () => {};
  if (process.env.NODE_ENV === 'development') {
    composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const store = createStore(
    rootReducer,
    rootState,
    composerEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(bookSaga);

  return store;
}
