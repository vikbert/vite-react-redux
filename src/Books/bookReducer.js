import { BOOKS_RECIEVED } from "./bookAction";

export const bookState = []

export const bookReducer = (state = bookState, action) => {
  if (action.type === BOOKS_RECIEVED) {
    return action.books;
  }

  return state;
}
