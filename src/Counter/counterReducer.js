import { COUNTER_INCREMENT } from './counterAction';

export const counterState = 0;

export const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
