import React, { useContext, useEffect, useCallback } from 'react';
import { AppContext } from '../context';
import Shelf from '../components/Shelf';
import UserDashboard from '../components/UserDashboard';
import Loading from '../components/Loading';

const API_BOOKSBYUSER = '/api/books/user/';

const MyBooks = () => {
  const {
    closeSubmenu,
    books,
    setBooks,
    loading,
    setLoading,
    userId,
    jwt,
  } = useContext(AppContext);

  const fetchMyBooks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BOOKSBYUSER}${userId}`, {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });
      if (res.ok) {
        const myBookList = await res.json();
        setBooks(myBookList);
      } else {
        throw new Error(`could not get books of user ${userId}`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setBooks, userId, jwt]);

  useEffect(() => {
    fetchMyBooks();
  }, [fetchMyBooks]);

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
        <Shelf books={books}>{books}</Shelf>
      </main>
    </>
  );
};

export default MyBooks;
