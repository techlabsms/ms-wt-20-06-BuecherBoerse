import React, { useContext, useState } from 'react';
import FilterButton from './FilterButton';
import '../styles/GenreFilter.css';
import { AppContext } from '../context/OverallContext';

const GenreFilter = () => {
  const { allBooks, setBooks } = useContext(AppContext);
  const allCategories = [
    'alle',
    ...new Set(allBooks.map((book) => book.category)),
  ];
  const [categories] = useState(allCategories);

  const filterBooks = (category) => {
    if (category === 'alle') {
      return setBooks(allBooks);
    }
    let filteredBooks = allBooks.filter((book) => book.category === category);
    setBooks(filteredBooks);
  };

  return (
    <>
      <section className='btn-container'>
        {categories.map((category, index) => {
          return (
            <FilterButton
              key={index}
              onClick={() => {
                filterBooks(category);
              }}
            >
              {category}
            </FilterButton>
          );
        })}
      </section>
    </>
  );
};

export default GenreFilter;
