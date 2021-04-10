import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
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
import MyBooks from './pages/MyBooks';
import Messages from './pages/Messages';

const App = () => {
  const { isUserLoggedIn } = useContext(AppContext);
  return (
    <>
      <Router>
        {isUserLoggedIn && <Navbar />}
        <ScrollToTop />
        <Switch>
          <Route path='/login'>
            {!isUserLoggedIn ? <LoginScreen /> : <Redirect to='/' />}
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
            <MyBooks />
          </ProtectedRoute>
          <ProtectedRoute path='/messages'>
            <Messages />
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
        {isUserLoggedIn && <Footer />}
      </Router>
    </>
  );
};

export default App;
