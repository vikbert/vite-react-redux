import React from 'react';
import useQueryBooks from './useQueryBooks';

export default function Books() {
  const { isLoading, data } = useQueryBooks();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    data.map((book, index) => (
      <div key={index}>
        <h6>{book.title}</h6>
        <img src={book.cover} alt="cover" />
      </div>
    ))
  );
}
