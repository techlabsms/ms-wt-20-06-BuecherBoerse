import React, { useState, useEffect, useCallback } from 'react';

const api = 'http://localhost:4000/api/books/';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const jwt = localStorage.getItem('name');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(jwt ? true : false);
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState(allBooks);
  const [loading, setLoading] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [alert, setAlert] = useState({ display: false, icon: '', msg: '' });

  const fetchBooks = useCallback(async () => {
    if (isUserLoggedIn) {
      setLoading(true);
      try {
        const res = await fetch(api);
        if (res.status >= 200 && res.status <= 299) {
          const bookList = await res.json();
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
  }, [isUserLoggedIn]);

  const openSubmenu = (coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        allBooks,
        books,
        setBooks,
        loading,
        alert,
        setAlert,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        fetchBooks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
