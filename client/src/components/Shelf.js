import React, { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/Shelf.css';
import Book from './Book';

const Shelf = () => {
  const { books, loading } = useContext(AppContext);
  if (books.length < 1 && !loading) {
    return (
      <>
        <section className='empty-shelf'>
          <div className='error-message basic-flex'>
            <h3 className='title'>
              Es gibt hier wohl leider keinen Match in unserer
              Bücherdatenbank...
            </h3>
          </div>
        </section>
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
