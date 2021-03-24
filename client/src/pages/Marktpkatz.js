import React, { useContext } from 'react';
import GenreFilter from '../components/GenreFilter';
import Shelf from '../components/Shelf';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import { AppContext } from '../context';

const Marktplatz = () => {
  const { books, loading, closeSubmenu } = useContext(AppContext);
  if (loading && books.length < 1) {
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    );
  }
  return (
    <>
      <main onClick={closeSubmenu}>
        <SearchBar />
        <GenreFilter />
        <Shelf />
      </main>
    </>
  );
};

export default Marktplatz;
