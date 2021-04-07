import React from 'react';
import '../styles/FilterButton.css';

const FilterButton = ({ index, category, filterBooks }) => {
  return (
    <>
      <button className='btn' key={index} onClick={() => filterBooks(category)}>
        {category}
      </button>
    </>
  );
};

export default FilterButton;
