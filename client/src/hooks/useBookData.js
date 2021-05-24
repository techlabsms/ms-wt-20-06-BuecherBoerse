import { useCallback } from 'react';
import { useGlobalContext } from '../context/OverallContext';
import { FaCheckCircle, FaPoo } from 'react-icons/fa';

export const useBookData = () => {
  const {
    setLoading,
    setAllBooks,
    setBooks,
    setOpenBook,
    setUser,
    setAlert,
    setNewBook,
    setBookImage,
  } = useGlobalContext();

  const fetchBooks = useCallback(
    async (api) => {
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
    },
    [setLoading, setAllBooks, setBooks]
  );

  const fetchMyBooks = useCallback(
    async (api, id, token) => {
      setLoading(true);
      try {
        const res = await fetch(`${api}${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
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
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
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

  const bookUpload = async (api, token, formdata) => {
    try {
      setLoading(true);
      const res = await fetch(api, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formdata,
      });
      if (res.ok) {
        await res.json();
        setLoading(false);
        setAlert({
          display: true,
          icon: <FaCheckCircle />,
          msg: 'Das Buch wurde erfolgreich hinzugefügt',
        });
      } else {
        throw new Error('Hoppala, da ist was schief gegangen');
      }
    } catch (error) {
      console.log('Hochladen fehlgeschlagen', error);
      setLoading(false);
      setAlert({
        display: true,
        icon: <FaPoo />,
        msg: 'Das hat irgendwie nicht geklappt...',
      });
    } finally {
      setNewBook({
        name: '',
        author: '',
        genre: '',
        language: '',
        condition: '',
        desc: '',
      });
      setBookImage();
    }
  };

  return {
    fetchBooks,
    fetchMyBooks,
    fetchSingleBook,
    fetchUser,
    bookUpload,
  };
};
