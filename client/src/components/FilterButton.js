import React from 'react';
import '../styles/FilterButton.css';

const FilterButton = (props) => {
  return (
    <>
      <button className='btn' key={props.id} {...props}>
        {props.children}
      </button>
    </>
  );
};

export default FilterButton;
