import React, { useState, useEffect } from 'react'
import Genres from './components/Genres'
import Shelf from './components/Shelf'
import data from './components/books'
import SearchBar from './components/SearchBar'

const App = () => {
  const allGenres = ['alle', ...new Set(data.map((book) => book.genre))]
  const [search, setSearch] = useState('')
  const [genres] = useState(allGenres)
  const [books, setBooks] = useState(data)

  const filterBooks = (genre) => {
    if (genre === 'alle') {
      return setBooks(data)
    }
    const filteredBooks = data.filter((book) => book.genre === genre)
    setBooks(filteredBooks)
  }

  useEffect(() => {
    const searchedBooks = data.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    )
    setBooks(searchedBooks)
  }, [search])

  return (
    <main>
      <SearchBar
        search={search}
        setSearch={setSearch}
        searchBooks={useEffect}
      />
      <Genres genres={genres} filterBooks={filterBooks} />
      <Shelf books={books} />
    </main>
  )
}

export default App
