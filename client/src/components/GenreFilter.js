import { useState } from 'react';
import FilterButton from './FilterButton';
import { useGlobalContext } from '../context/OverallContext';

const GenreFilter = () => {
  const { allBooks, setBooks } = useGlobalContext();
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
