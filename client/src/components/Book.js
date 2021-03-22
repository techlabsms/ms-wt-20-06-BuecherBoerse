import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Book.css';

const Book = ({ _id, image, name, author, category }) => {
  return (
    <Link to={`/openbook/${_id}`} key={_id} className='book'>
      <img src={image} alt={name} />
      <footer className='book-info'>
        <h4>{name}</h4>
        <p className='book-author'>{author}</p>
        <p className='book-genre'>{category}</p>
      </footer>
    </Link>
  );
};

export default Book;
