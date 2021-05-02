import { useContext, useCallback } from 'react';
import { AppContext } from '../context/OverallContext';

export const useFetchBookData = () => {
  const { setLoading, setBooks } = useContext(AppContext);
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
    fetchMyBooks,
  };
};
