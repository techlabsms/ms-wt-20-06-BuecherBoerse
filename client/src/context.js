import React, { useState, useEffect, useCallback } from 'react';
const api = '/api/books/';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const jwt = localStorage.getItem('name');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(jwt ? true : false);
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState(allBooks);
  const [isBookUploaded, setIsBookUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [isTabLeft, setIsTabLeft] = useState(true);
  const [alert, setAlert] = useState({ display: false, icon: '', msg: '' });

  const fetchBooks = useCallback(async () => {
    if (isUserLoggedIn || isBookUploaded) {
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
  }, [isUserLoggedIn, isBookUploaded]);

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

  useEffect(() => {
    let timeout = () => {
      setTimeout(() => {
        setIsBookUploaded(false);
      }, 3000);
    };
    return () => clearTimeout(timeout);
  });

  return (
    <AppContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        allBooks,
        books,
        setBooks,
        loading,
        setLoading,
        alert,
        setAlert,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        fetchBooks,
        setIsBookUploaded,
        isTabLeft,
        setIsTabLeft,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
