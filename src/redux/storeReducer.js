import { combineReducers } from 'redux';
import { counterReducer, counterState } from '../Counter/counterReducer';

const allReducers = combineReducers({
  reduxCounter: counterReducer,
});

export const rootState = {
  reduxCounter: counterState,
};

export default function rootReducer(state, action) {
  return allReducers(state, action);
}
