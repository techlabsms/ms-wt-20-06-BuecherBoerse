import React, { useEffect } from 'react';
import GenreFilter from '../components/GenreFilter';
import Shelf from '../components/Shelf';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import EmptyShelf from '../components/EmptyShelf';
import { useGlobalContext } from '../context/OverallContext';
import { useFetchBookData } from '../hooks/useFetchBookData';

const Marketplace = () => {
  const {
    isUserLoggedIn,
    books,
    loading,
    closeSubmenu,
    API_BOOKS,
  } = useGlobalContext();
  const { fetchBooks } = useFetchBookData();

  useEffect(() => {
    if (isUserLoggedIn) {
      fetchBooks(API_BOOKS);
    }
  }, [fetchBooks, API_BOOKS, isUserLoggedIn]);

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
