import React, { useContext, useEffect } from 'react';
import GenreFilter from '../components/GenreFilter';
import Shelf from '../components/Shelf';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import EmptyShelf from '../components/EmptyShelf';
import { AppContext } from '../context/OverallContext';
import { useFetchBookData } from '../hooks/useFetchBookData';

const Marketplace = () => {
  const { books, loading, closeSubmenu, API_BOOKS } = useContext(AppContext);
  const { fetchBooks } = useFetchBookData();

  useEffect(() => {
    fetchBooks(API_BOOKS);
  }, [fetchBooks, API_BOOKS]);

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
        {books.length < 1 ? (
          <EmptyShelf>
            Zurzeit befinden sich keine Bücher im Bücherregal. Lade doch gerne
            welche hoch!
          </EmptyShelf>
        ) : (
          <Shelf books={books}>{books}</Shelf>
        )}
      </main>
    </>
  );
};

export default Marketplace;
