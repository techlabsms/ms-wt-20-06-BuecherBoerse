import React, { useContext, useEffect, useCallback } from 'react';
import { AppContext } from '../context';
import Shelf from '../components/Shelf';
import UserDashboard from '../components/UserDashboard';
import ReturnTo from '../components/ReturnTo';
import Loading from '../components/Loading';

const apiBookByUser = '/api/books/user/';
const userId = sessionStorage.getItem('id');
const jwt = sessionStorage.getItem('token');

const MyBooks = () => {
  const { closeSubmenu, setBooks, loading, setLoading } = useContext(
    AppContext
  );

  const fetchMyBooks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiBookByUser}${userId}`, {
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
  }, [setLoading, setBooks]);

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
        <ReturnTo />
        <UserDashboard />
        <Shelf />
      </main>
    </>
  );
};

export default MyBooks;
