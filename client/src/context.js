import React, { useState, useEffect, useCallback } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const API_BOOKS = '/api/books/';
  const API_USERS = '/api/users/';
  const AUTH_SIGNIN = '/auth/signin/';
  const AUTH_SIGNOUT = '/auth/signout';
  const API_BOOKSBYUSER = '/api/books/user/';
  const userName = sessionStorage.getItem('name');
  const userId = sessionStorage.getItem('id');
  const jwt = sessionStorage.getItem('token');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(userName ? true : false);
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState(allBooks);
  const [isBookUploaded, setIsBookUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [location, setLocation] = useState({});
  const [isTabLeft, setIsTabLeft] = useState(true);
  const [alert, setAlert] = useState({ display: false, icon: '', msg: '' });

  const fetchBooks = useCallback(async () => {
    if (isUserLoggedIn || isBookUploaded) {
      setLoading(true);
      try {
        const res = await fetch(API_BOOKS);
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

  const hideLinks = () => {
    if (showLinks) {
      setShowLinks(false);
    }
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
        API_BOOKS,
        API_USERS,
        AUTH_SIGNIN,
        AUTH_SIGNOUT,
        API_BOOKSBYUSER,
        isUserLoggedIn,
        setIsUserLoggedIn,
        allBooks,
        books,
        setBooks,
        loading,
        setLoading,
        alert,
        setAlert,
        showLinks,
        setShowLinks,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        fetchBooks,
        setIsBookUploaded,
        isTabLeft,
        setIsTabLeft,
        userName,
        userId,
        jwt,
        hideLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
