import React, { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/Shelf.css';
import Book from './Book';
import Loading from './Loading';

const Shelf = () => {
  const { books, loading } = useContext(AppContext);
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
          return <Book key={book._id} {...book} />;
        })}
      </ul>
    </>
  );
};

export default Shelf;
