import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Marktplatz from './pages/Marktpkatz';
import OpenBook from './pages/OpenBook';
import UploadBook from './pages/UploadBook';
import Footer from './components/Footer';
import LoginScreen from './pages/LoginScreen';
import Error from './pages/Error';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login'>
            <LoginScreen />
          </Route>
          <ProtectedRoute exact path='/'>
            <Marktplatz />
          </ProtectedRoute>
          <ProtectedRoute path='/uploadbook'>
            <UploadBook />
          </ProtectedRoute>
          <ProtectedRoute path='/openbook/:id'>
            <OpenBook />
          </ProtectedRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
