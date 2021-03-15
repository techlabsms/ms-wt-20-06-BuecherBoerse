import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ search, setSearch }) => {
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

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
