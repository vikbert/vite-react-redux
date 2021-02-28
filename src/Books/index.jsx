import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './bookAction';

export default function Books() {
  const reduxBook = useSelector(state => state.reduxBook);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      {reduxBook.map((book, index) => (
        <div key={index}>
          <h6>{book.title}</h6>
          <img src={book.cover} alt="cover" />
        </div>
      ))}
    </>
  );
}
