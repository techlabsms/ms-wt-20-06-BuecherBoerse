import { useEffect } from 'react';
import GenreFilter from '../components/GenreFilter';
import Shelf from '../components/Shelf';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import EmptyShelf from '../components/EmptyShelf';
import { useGlobalContext } from '../context/OverallContext';
import { useBookData } from '../hooks/useBookData';
import { motion } from 'framer-motion';

const Marketplace = () => {
  const { books, loading, closeSubmenu, API_BOOKS } = useGlobalContext();
  const { fetchBooks } = useBookData();

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
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={closeSubmenu}
      >
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
      </motion.main>
    </>
  );
};

export default Marketplace;
