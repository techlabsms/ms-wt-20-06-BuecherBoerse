import React from 'react';
import '../styles/Shelf.css';
import Book from './Book';
import Loading from './Loading';

const Shelf = ({ books, loading }) => {
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <ul className='shelf-container'>
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </ul>
    </>
  );
};

export default Shelf;
