import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Marktplatz from './pages/Marktpkatz';
import OpenBook from './pages/OpenBook';
import UploadBook from './pages/UploadBook';
import Footer from './components/Footer';
import LoginScreen from './pages/LoginScreen';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Marktplatz />
          </Route>
          <Route path='/uploadbook'>
            <UploadBook />
          </Route>
          <Route path='/openbook/:id'>
            <OpenBook />
          </Route>
          <Route path='/login'>
            <LoginScreen />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
