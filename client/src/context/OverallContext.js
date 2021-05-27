import React, { useState, useContext, useRef } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const API_BOOKS = '/api/books/';
  const API_USERS = '/api/users/';
  const AUTH_SIGNIN = '/auth/signin/';
  const AUTH_SIGNOUT = '/auth/signout';
  const API_BOOKSBYUSER = '/api/books/user/';
  const API_MESSAGES = '/api/messages/';
  const API_MESSAGESUSER = '/api/messages/user/';
  const userName = sessionStorage.getItem('name');
  const userId = sessionStorage.getItem('id');
  const jwt = sessionStorage.getItem('token');
  const [userCredential, setUserCredential] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(userName ? true : false);
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState(allBooks);
  const [myBooks, setMyBooks] = useState([]);
  const [openBook, setOpenBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [location, setLocation] = useState({});
  const [isTabLeft, setIsTabLeft] = useState(true);
  const [alert, setAlert] = useState({ display: false, icon: '', msg: '' });
  const [newBook, setNewBook] = useState({
    name: '',
    author: '',
    genre: '',
    language: '',
    condition: '',
    desc: '',
  });
  const [bookImage, setBookImage] = useState();
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showEditBook, setShowEditBook] = useState(false);
  const [user, setUser] = useState();
  const [chat, setChat] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(false);
  const [newMessage, setNewMessage] = useState({
    sender: '',
    reciever: '',
    message: '',
  });
  const scrollToBottom = useRef();

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

  return (
    <AppContext.Provider
      value={{
        API_BOOKS,
        API_USERS,
        AUTH_SIGNIN,
        AUTH_SIGNOUT,
        API_BOOKSBYUSER,
        API_MESSAGES,
        API_MESSAGESUSER,
        userCredential,
        setUserCredential,
        isUserLoggedIn,
        setIsUserLoggedIn,
        allBooks,
        setAllBooks,
        books,
        setBooks,
        myBooks,
        setMyBooks,
        openBook,
        setOpenBook,
        loading,
        setLoading,
        alert,
        setAlert,
        newBook,
        setNewBook,
        bookImage,
        setBookImage,
        showLinks,
        setShowLinks,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        isTabLeft,
        setIsTabLeft,
        userName,
        userId,
        jwt,
        hideLinks,
        showMessageModal,
        setShowMessageModal,
        showEditBook,
        setShowEditBook,
        user,
        setUser,
        conversations,
        setConversations,
        chat,
        setChat,
        newMessage,
        setNewMessage,
        isMessageSent,
        setIsMessageSent,
        selectedConversation,
        setSelectedConversation,
        scrollToBottom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
