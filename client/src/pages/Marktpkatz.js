import React, { useState, useEffect } from 'react';
import GenreFilter from '../components/GenreFilter';
import Shelf from '../components/Shelf';
import availableBooks from '../components/books';
import SearchBar from '../components/SearchBar';
const api = 'http://localhost:4000/api/books/';

const Marktplatz = () => {
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch(api);
      if (res.status >= 200 && res.status <= 299) {
        console.log('successfully fetched something');
        const bookList = await res.json();
        console.log(bookList);
      } else {
        throw new Error('Hoppala, da ist was schief gelaufen');
      }
    } catch (err) {
      console.log('errooooorrrrrrrr....');
    } finally {
      setLoading(false);
    }
  };

  const allGenres = [
    'alle',
    ...new Set(availableBooks.map((book) => book.genre)),
  ];

  const [search, setSearch] = useState('');
  const [genres] = useState(allGenres);
  const [books, setBooks] = useState(availableBooks);
  const [loading, setLoading] = useState(false);

  const filterBooks = (genre) => {
    if (genre === 'alle') {
      return setBooks(availableBooks);
    }
    let filteredBooks = availableBooks.filter((book) => book.genre === genre);
    setBooks(filteredBooks);
  };

  useEffect(() => {
    let searchedBooks = availableBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
    setBooks(searchedBooks);
  }, [search]);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <main>
        <SearchBar search={search} setSearch={setSearch} />
        <GenreFilter genres={genres} filterBooks={filterBooks} />
        <Shelf books={books} loading={loading} />
      </main>
    </>
  );
};

export default Marktplatz;
