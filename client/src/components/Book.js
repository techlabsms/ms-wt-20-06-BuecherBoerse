import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Book.css'

const Book = ({ id, img, title, author, genre }) => {
  return (
    <Link to={`/openbook/${id}`} key={id} className='book'>
      <img src={img} alt={title} />
      <footer className='book-info'>
        <h4>{title}</h4>
        <p className='book-author'>{author}</p>
        <p className='book-genre'>{genre}</p>
      </footer>
    </Link>
  )
}

export default Book
