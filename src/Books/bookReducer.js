import { FETCH_BOOKS_DONE } from "./bookAction";

export const bookState = []

export const bookReducer = (state = bookState, action) => {
  if (action.type === FETCH_BOOKS_DONE) {
    return action.books;
  }

  return state;
}
