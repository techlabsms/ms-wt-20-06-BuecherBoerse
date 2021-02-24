import React from 'react'
import '../styles/FilterButton.css'

const FilterButton = ({ index, genre, filterBooks }) => {
  return (
    <button className='btn' key={index} onClick={() => filterBooks(genre)}>
      {genre}
    </button>
  )
}

export default FilterButton
