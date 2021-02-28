export const BOOKS_RECIEVED = 'book.BOOKS_RECIEVED';
export const FETCH_BOOKS = 'book.FETCH_BOOKS';

export const fetchBooksDone = (books) => {
  return {
    type: BOOKS_RECIEVED,
    books,
  };
};

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
});
