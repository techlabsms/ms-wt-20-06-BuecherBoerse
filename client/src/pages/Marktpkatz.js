import React, { useState, useEffect } from 'react';
import GenreFilter from '../components/GenreFilter';
import Shelf from '../components/Shelf';
import availableBooks from '../components/books';
import SearchBar from '../components/SearchBar';
const api = 'http://localhost:4000/api/books/';

const Marktplatz = () => {
  const fetchBooks = async () => {
    try {
      let response = await fetch(api);
      if (response.status >= 200 && response.status <= 299) {
        console.log('successfully fetched something');
        console.log(response.headers.get('Content-Type'));
        console.log(response.statusText);
        console.log(response.type);
        console.log(response.url);
      } else {
        console.log("oooops, that fetchin' went wrong somehow");
      }
      let bookList = await response.json();
      console.log(bookList);
    } catch (err) {
      console.log('errooooorrrrrrrr....');
    }
  };

  const allGenres = [
    'alle',
    ...new Set(availableBooks.map((book) => book.genre)),
  ];

  const [search, setSearch] = useState('');
  const [genres] = useState(allGenres);
  const [books, setBooks] = useState(availableBooks);

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
        <Shelf books={books} />
      </main>
    </>
  );
};

export default Marktplatz;
