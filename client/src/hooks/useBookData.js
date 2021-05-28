import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context/OverallContext';
import { FaCheckCircle, FaPoo } from 'react-icons/fa';

export const useBookData = () => {
  const {
    setLoading,
    setAllBooks,
    setBooks,
    setMyBooks,
    setOpenBook,
    setUser,
    setAlert,
    setNewBook,
    setBookImage,
    setShowEditBook,
  } = useGlobalContext();
  const history = useHistory();

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
          setMyBooks(myBookList);
        } else {
          throw new Error(`could not get books of user ${id}`);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setMyBooks]
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

  const deleteSingleBook = async (api, id, token) => {
    try {
      setLoading(true);
      const res = await fetch(`${api}${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        await res.json();
        setLoading(false);
        history.goBack(
          setAlert({
            display: true,
            icon: <FaCheckCircle />,
            msg: 'Das Buch wurde erfolgreich gelöscht',
          })
        );
      } else {
        throw new Error('Das Buch konnte nicht gelöscht werden');
      }
    } catch (error) {
      console.log('Löschen fehlgeschlagen', error);
      setLoading(false);
      setAlert({
        display: true,
        icon: <FaPoo />,
        msg: 'Das Buch konnte nicht gelöscht werden...',
      });
    }
  };

  const updateSingleBookInfo = async (api, id, token, data) => {
    try {
      setLoading(true);
      const res = await fetch(`${api}${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        await res.json();
        setShowEditBook(false);
        setAlert({
          display: true,
          icon: <FaCheckCircle />,
          msg: 'Du hast die Buchinfo erfolgreich geändert!',
        });
      } else {
        throw new Error('Hoppla, da ist wohl was schief gegangen');
      }
    } catch (error) {
      console.log('Update fehlgeschlagen', error);
      setAlert({
        display: true,
        icon: <FaPoo />,
        msg: 'Die Buchinfo konnte irgendwie nicht gespeichert werden...',
      });
    } finally {
      setLoading(false);
      setNewBook({
        name: '',
        author: '',
        genre: '',
        language: '',
        condition: '',
        desc: '',
      });
    }
  };

  return {
    fetchBooks,
    fetchMyBooks,
    fetchSingleBook,
    fetchUser,
    bookUpload,
    deleteSingleBook,
    updateSingleBookInfo,
  };
};
