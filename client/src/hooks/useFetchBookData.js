import { useContext, useCallback } from 'react';
import { AppContext } from '../context/OverallContext';

export const useFetchBookData = () => {
  const { isUserLoggedIn, setLoading, setAllBooks, setBooks } = useContext(
    AppContext
  );

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

  return {
    fetchBooks,
    fetchMyBooks,
  };
};
