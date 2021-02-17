import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import GenreFilter from './components/GenreFilter'
import Shelf from './components/Shelf'
import availableBooks from './components/books'
import SearchBar from './components/SearchBar'

const App = () => {
  const allGenres = [
    'alle',
    ...new Set(availableBooks.map((book) => book.genre)),
  ]
  const [search, setSearch] = useState('')
  const [genres] = useState(allGenres)
  const [books, setBooks] = useState(availableBooks)

  const filterBooks = (genre) => {
    if (genre === 'alle') {
      return setBooks(availableBooks)
    }
    let filteredBooks = availableBooks.filter((book) => book.genre === genre)
    setBooks(filteredBooks)
  }

  useEffect(
    function searchBooks() {
      let searchedBooks = availableBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      )
      setBooks(searchedBooks)
    },
    [search]
  )

  return (
    <>
      <Navbar />
      <main>
        <SearchBar search={search} setSearch={setSearch} />
        <GenreFilter genres={genres} filterBooks={filterBooks} />
        <Shelf books={books} />
      </main>
    </>
  )
}

export default App
