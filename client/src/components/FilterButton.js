import React from 'react'

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
