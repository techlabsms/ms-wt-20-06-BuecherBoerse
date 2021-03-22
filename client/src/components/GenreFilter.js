import React, { useContext, useState } from 'react';
import FilterButton from './FilterButton';
import '../styles/GenreFilter.css';
import { AppContext } from '../context';

const GenreFilter = React.memo(() => {
  const { books } = useContext(AppContext);
  const allCategories = [
    'alle',
    ...new Set(books.map((book) => book.category)),
  ];
  const [categories] = useState(allCategories);

  return (
    <>
      <section className='btn-container'>
        {categories.map((category, index) => {
          return <FilterButton key={index} category={category} />;
        })}
      </section>
    </>
  );
});

export default GenreFilter;
