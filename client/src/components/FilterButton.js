import React from 'react'
import '../styles/FilterButton.css'

const FilterButton = ({ index, genre, filterBooks }) => {
  return (
    <button
      key={index}
      className='btn'
      type='button'
      onClick={() => filterBooks(genre)}
    >
      {genre}
    </button>
  )
}

export default FilterButton
