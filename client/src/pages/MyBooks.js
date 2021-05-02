import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/OverallContext';
import Shelf from '../components/Shelf';
import UserDashboard from '../components/UserDashboard';
import Loading from '../components/Loading';
import EmptyShelf from '../components/EmptyShelf';
import { useFetchBookData } from '../hooks/useFetchBookData';

const MyBooks = () => {
  const {
    closeSubmenu,
    books,
    loading,
    userId,
    jwt,
    API_BOOKSBYUSER,
  } = useContext(AppContext);

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
      <main onClick={closeSubmenu}>
        <UserDashboard />
        {books.length < 1 ? (
          <EmptyShelf>
            Aktuell hast du noch keine Bücher hochgeladen. Lade schnell welche
            hoch und biete sie zum Verleihen an!
          </EmptyShelf>
        ) : (
          <Shelf books={books}>{books}</Shelf>
        )}
      </main>
    </>
  );
};

export default MyBooks;
