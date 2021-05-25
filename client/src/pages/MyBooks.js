import { useEffect } from 'react';
import { useGlobalContext } from '../context/OverallContext';
import Shelf from '../components/Shelf';
import UserDashboard from '../components/UserDashboard';
import Loading from '../components/Loading';
import EmptyShelf from '../components/EmptyShelf';
import Alert from '../components/Alert';
import { useBookData } from '../hooks/useBookData';
import { motion } from 'framer-motion';

const MyBooks = () => {
  const {
    alert,
    closeSubmenu,
    myBooks,
    loading,
    userId,
    jwt,
    API_BOOKSBYUSER,
  } = useGlobalContext();
  const { fetchMyBooks } = useBookData();

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
        transition={{ duration: 0.25 }}
        onClick={closeSubmenu}
      >
        <UserDashboard />
        {myBooks.length < 1 ? (
          <EmptyShelf>
            Aktuell hast du noch keine Bücher hochgeladen. Lade schnell welche
            hoch und biete sie zum Verleihen an!
          </EmptyShelf>
        ) : (
          <Shelf books={myBooks}>{myBooks}</Shelf>
        )}
        {alert.display && <Alert />}
      </motion.main>
    </>
  );
};

export default MyBooks;
