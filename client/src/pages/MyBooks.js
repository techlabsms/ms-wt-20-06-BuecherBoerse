import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/OverallContext';
import Shelf from '../components/Shelf';
import UserDashboard from '../components/UserDashboard';
import Loading from '../components/Loading';
import EmptyShelf from '../components/EmptyShelf';
import { useFetchBookData } from '../hooks/useFetchBookData';
import { motion } from 'framer-motion';

const MyBooks = () => {
  const { closeSubmenu, books, loading, userId, jwt, API_BOOKSBYUSER } =
    useGlobalContext();
  const { fetchMyBooks } = useFetchBookData();

  useEffect(() => {
    fetchMyBooks(API_BOOKSBYUSER, userId, jwt);
  }, [fetchMyBooks, API_BOOKSBYUSER, userId, jwt]);

  if (loading) {
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
        transition={{ duration: 0.5 }}
        onClick={closeSubmenu}
      >
        <UserDashboard />
        {books.length < 1 ? (
          <EmptyShelf>
            Aktuell hast du noch keine Bücher hochgeladen. Lade schnell welche
            hoch und biete sie zum Verleihen an!
          </EmptyShelf>
        ) : (
          <Shelf books={books}>{books}</Shelf>
        )}
      </motion.main>
    </>
  );
};

export default MyBooks;
