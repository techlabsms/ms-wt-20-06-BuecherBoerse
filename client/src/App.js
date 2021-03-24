import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Marktplatz from './pages/Marktpkatz';
import OpenBook from './pages/OpenBook';
import UploadBook from './pages/UploadBook';
import Footer from './components/Footer';
import LoginScreen from './pages/LoginScreen';
import DataPrivacy from './pages/DataPrivacy';
import Imprint from './pages/Imprint';

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
          <Route path='/login'>
            <LoginScreen />
          </Route>
          <Route path='/openbook/:id'>
            <OpenBook />
          </Route>
          <Route path='/imprint'>
            <Imprint />
          </Route>
          <Route path='/dataprivacy'>
            <DataPrivacy />
          </Route>        
          </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
