import React from 'react'

const Genres = ({ genres, filterBooks }) => {
  return (
    <section className='btn-container'>
      {genres.map((genre, index) => {
        return (
          <button
            key={index}
            className='filter-btn'
            type='button'
            onClick={() => filterBooks(genre)}
          >
            {genre}
          </button>
        )
      })}
    </section>
  )
}

export default Genres
