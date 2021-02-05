import React from 'react'
import FilterButton from './FilterButton'

const Genres = ({ genres, filterBooks }) => {
  return (
    <section className='btn-container'>
      {genres.map((genre, index) => {
        return (
          <FilterButton key={index} genre={genre} filterBooks={filterBooks} />
        )
      })}
    </section>
  )
}

export default Genres
