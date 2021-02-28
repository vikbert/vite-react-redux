import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './bookAction';

export default function Books() {
  const reduxBook = useSelector(state => state.reduxBook);
  const dispatch = useDispatch();

  const handleFetchBooks = () => {
    dispatch(fetchBooks());
  };
  return (
    <>
      <button onClick={handleFetchBooks}>Fetch Books</button>
      {reduxBook.map((book, index) => (
        <div key={index}>
          <h6>{book.title}</h6>
          <img src={book.cover} alt="cover" />
        </div>
      ))}
    </>
  );
}
