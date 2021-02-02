import React from 'react'
import Book from './Book'

const Shelf = ({ books }) => {
  return (
    <section className='shelf-container'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

export default Shelf
