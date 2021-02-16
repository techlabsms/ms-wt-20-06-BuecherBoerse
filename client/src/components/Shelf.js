import React from 'react'
import '../styles/Shelf.css'
import Book from './Book'

const Shelf = ({ books, openPopup }) => {
  return (
    <ul className='shelf-container'>
      {books.map((book) => {
        return <Book {...book} key={book.id} openPopup={openPopup} />
      })}
    </ul>
  )
}

export default Shelf
