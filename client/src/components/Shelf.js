import React from 'react'
import '../styles/Shelf.css'
import Book from './Book'

const Shelf = ({ books, openPopup }) => {
  return (
    <ul className='shelf-container'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </ul>
  )
}

export default Shelf
