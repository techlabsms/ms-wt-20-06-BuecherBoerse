import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   let searchedBooks = books.filter(
  //     (book) =>
  //       book.name.toLowerCase().includes(search.toLowerCase()) ||
  //       book.author.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setBooks(searchedBooks);
  // }, [search]);

  return (
    <>
      <section className='search-bar'>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            className='form'
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
