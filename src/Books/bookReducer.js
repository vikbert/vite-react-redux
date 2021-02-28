import { BOOK_RECIEVED } from "./bookAction";

export const bookState = []

export const bookReducer = (state = bookState, action) => {
  if (action.type === BOOK_RECIEVED) {
    return action.books;
  }

  return state;
}
