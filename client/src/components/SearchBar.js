import React from 'react'
import '../styles/SearchBar.css'

const SearchBar = ({ search, setSearch }) => {
  return (
    <section className='search-bar'>
      <form onSubmit={(e) => e.preventDefault}>
        <input
          type='text'
          className='form'
          id='userinput'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Nach Titel oder Autor suchen...'
        ></input>
      </form>
    </section>
  )
}

export default SearchBar
