export const BOOK_RECIEVED = 'book.BOOK_RECIEVED';

export const bookRecieved = (books) => {
  return {
    type: BOOK_RECIEVED,
    books,
  };
};

export const fetchBooks = () => {
  return function (dispatch) {
    return fetch('https://my-json-server.typicode.com/vikbert/jsonfaker/books')
      .then((res) => res.json())
      .then((data) => {
        dispatch(bookRecieved(data));
      });
  };
};
