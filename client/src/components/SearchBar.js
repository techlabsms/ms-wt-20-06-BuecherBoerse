import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const { allBooks, setBooks } = useContext(AppContext);
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let searchedBooks = allBooks.filter(
      (book) =>
        book.name.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
    setBooks(searchedBooks);
  }, [search, allBooks, setBooks]);

  return (
    <>
      <section className='search-bar'>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            className='search-form'
            value={search}
            onChange={handleInput}
            placeholder='Nach Titel oder Autor suchen...'
          ></input>
        </form>
      </section>
    </>
  );
};

export default SearchBar;
