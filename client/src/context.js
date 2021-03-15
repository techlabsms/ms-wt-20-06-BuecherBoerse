import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [alert, setAlert] = useState({ display: false, icon: '', msg: '' });

  const openSubmenu = (coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        alert,
        setAlert,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
