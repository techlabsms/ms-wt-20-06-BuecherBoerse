import React from 'react';
import '../styles/Shelf.css';
import Book from './Book';

const Shelf = (props) => {
  return (
    <>
      <ul className='shelf-container'>
        {props.children.map((book) => {
          return <Book key={book._id} {...book} />;
        })}
      </ul>
    </>
  );
};

export default Shelf;
