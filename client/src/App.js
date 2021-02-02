import React, { useState } from 'react'
import Genres from './components/Genres'
import Shelf from './components/Shelf'
import books from './components/books'

const App = () => {
  const allGenres = ['alle', ...new Set(books.map((book) => book.genre))]
  const [bookItems, setBookItems] = useState(books)
  const [genres] = useState(allGenres)

  const filterBooks = (genre) => {
    if (genre === 'alle') {
      setBookItems(books)
      return
    }
    const filteredBooks = books.filter((book) => book.genre === genre)
    setBookItems(filteredBooks)
  }
  return (
    <main>
      <h1 className='title'>Bücherregal</h1>
      <Genres genres={genres} filterBooks={filterBooks} />
      <Shelf books={bookItems} />
    </main>
  )
}

export default App
