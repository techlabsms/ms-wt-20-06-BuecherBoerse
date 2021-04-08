import React, { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/Shelf.css';
import Book from './Book';
import EmptyShelf from './EmptyShelf';

const Shelf = () => {
  const { books, loading } = useContext(AppContext);
  if (books.length < 1 && !loading) {
    return (
      <>
        <EmptyShelf>
          Es gibt hier wohl leider keinen Match in unserer Bücherdatenbank...
        </EmptyShelf>
      </>
    );
  }
  return (
    <>
      <ul className='shelf-container'>
        {books.map((book) => {
          return <Book key={book._id} {...book} />;
        })}
      </ul>
    </>
  );
};

export default Shelf;
