import { combineReducers } from 'redux';
import { bookReducer, bookState } from '../Books/bookReducer';

import { counterReducer, counterState } from '../Counter/counterReducer';

const allReducers = combineReducers({
  reduxCounter: counterReducer,
  reduxBook: bookReducer,
});

export const rootState = {
  reduxCounter: counterState,
  reduxBook: bookState,
};

export default function rootReducer(state, action) {
  return allReducers(state, action);
}
