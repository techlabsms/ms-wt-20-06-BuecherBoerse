import React from 'react'
import './FilterButton.css'

const FilterButton = ({ index, genre, filterBooks }) => {
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
}

export default FilterButton
