import React from 'react'
import Book from './Book'

const Shelf = ({ books }) => {
  return (
    <ul className='shelf-container'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </ul>
  )
}

export default Shelf
