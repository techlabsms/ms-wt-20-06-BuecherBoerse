import React from 'react'

const SearchBar = ({ search, setSearch, useEffect }) => {
  return (
    <section className='search-bar'>
      <form onSubmit={(e) => e.preventDefault}>
        <input
          type='text'
          className='form'
          id='userinput'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onInput={useEffect}
          placeholder='Nach Titel oder Autor suchen'
        ></input>
      </form>
    </section>
  )
}

export default SearchBar
