import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [alert, setAlert] = useState({ display: false, icon: '', msg: '' });

  return (
    <AppContext.Provider
      value={{ isUserLoggedIn, setIsUserLoggedIn, alert, setAlert }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
