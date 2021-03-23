import React, { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/FilterButton.css';

const FilterButton = ({ index, category }) => {
  const { allBooks, setBooks } = useContext(AppContext);
  const filterBooks = (category) => {
    if (category === 'alle') {
      return setBooks(allBooks);
    }
    let filteredBooks = allBooks.filter((book) => book.category === category);
    setBooks(filteredBooks);
  };
  return (
    <>
      <button className='btn' key={index} onClick={() => filterBooks(category)}>
        {category}
      </button>
    </>
  );
};

export default FilterButton;
