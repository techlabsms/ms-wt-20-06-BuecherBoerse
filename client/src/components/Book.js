import React from 'react'
import '../styles/Book.css'

const Book = ({ id, img, title, author, genre, openPopup }) => {
  return (
    <li className='book' key={id} onClick={openPopup}>
      <img src={img} alt={title} />
      <footer className='book-info'>
        <h4>{title}</h4>
        <p className='book-author'>{author}</p>
        <p className='book-genre'>{genre}</p>
      </footer>
    </li>
  )
}

export default Book
