import { useCallback } from 'react';
import { useGlobalContext } from '../context/OverallContext';

export const useFetchBookData = () => {
  const {
    isUserLoggedIn,
    setLoading,
    setAllBooks,
    setBooks,
    setOpenBook,
    setUser,
  } = useGlobalContext();

  const fetchBooks = useCallback(
    async (api) => {
      if (isUserLoggedIn) {
        setLoading(true);
        try {
          const res = await fetch(api);
          if (res.ok) {
            let data = await res.json();
            const bookList = data.reverse();
            setAllBooks(bookList);
            setBooks(bookList);
          } else {
            throw new Error('Hoppala, da ist was schief gelaufen');
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    },
    [isUserLoggedIn, setLoading, setAllBooks, setBooks]
  );

  const fetchMyBooks = useCallback(
    async (api, id, token) => {
      setLoading(true);
      try {
        const res = await fetch(`${api}${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const myBookList = await res.json();
          setBooks(myBookList);
        } else {
          throw new Error(`could not get books of user ${id}`);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setBooks]
  );

  const fetchSingleBook = useCallback(
    async (api, id) => {
      setLoading(true);
      try {
        const res = await fetch(`${api}${id}`);
        if (res.ok) {
          const singleBook = await res.json();
          setOpenBook(singleBook);
        } else {
          throw new Error('etwas hat nicht geklappt');
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setOpenBook]
  );

  const fetchUser = useCallback(
    async (owner, api, token) => {
      try {
        if (!owner) {
          return null;
        }
        const res = await fetch(`${api}${owner}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const userInfo = await res.json();
          setUser(userInfo.name);
        } else {
          throw new Error('could not get user info');
        }
      } catch (err) {
        console.log(err);
      }
    },
    [setUser]
  );

  return {
    fetchBooks,
    fetchMyBooks,
    fetchSingleBook,
    fetchUser,
  };
};
