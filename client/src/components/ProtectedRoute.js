import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../context';

const ProtectedRoute = ({ children, location, ...path }) => {
  const { isUserLoggedIn } = useContext(AppContext);
  if (isUserLoggedIn) {
    return (
      <>
        <Route {...path}>{children}</Route>
      </>
    );
  } else {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }
};

export default ProtectedRoute;
