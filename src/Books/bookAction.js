export const FETCH_BOOKS_DONE = 'book.FETCH_BOOKS_DONE';

export const fetchBooksDone = (books) => {
  return {
    type: FETCH_BOOKS_DONE,
    books,
  };
};

export const fetchBooks = () => {
  return function (dispatch) {
    return fetch('https://my-json-server.typicode.com/vikbert/jsonfaker/books')
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchBooksDone(data));
      });
  };
};
