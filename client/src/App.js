import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContext } from './context';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Marketplace from './pages/Marketplace';
import OpenBook from './pages/OpenBook';
import UploadBook from './pages/UploadBook';
import Footer from './components/Footer';
import LoginScreen from './pages/LoginScreen';
import Error from './pages/Error';
import ScrollToTop from './components/ScrollToTop';
import DataPrivacy from './pages/DataPrivacy';
import Imprint from './pages/Imprint';

const App = () => {
  const { isUserLoggedIn } = useContext(AppContext);
  return (
    <>
      <Router>
        {isUserLoggedIn ? <Navbar /> : null}
        <ScrollToTop />
        <Switch>
          <Route path='/login'>
            <LoginScreen />
          </Route>
          <ProtectedRoute exact path='/'>
            <Marketplace />
          </ProtectedRoute>
          <ProtectedRoute path='/uploadbook'>
            <UploadBook />
          </ProtectedRoute>
          <ProtectedRoute path='/openbook/:id'>
            <OpenBook />
          </ProtectedRoute>
          <ProtectedRoute path='/mybooks'>
            <Error />
          </ProtectedRoute>
          <ProtectedRoute path='/messages'>
            <Error />
          </ProtectedRoute>
          <ProtectedRoute path='/about'>
            <Error />
          </ProtectedRoute>
          <ProtectedRoute path='/imprint'>
            <Imprint />
          </ProtectedRoute>
          <ProtectedRoute path='/dataprivacy'>
            <DataPrivacy />
          </ProtectedRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        {isUserLoggedIn ? <Footer /> : null}
      </Router>
    </>
  );
};

export default App;
