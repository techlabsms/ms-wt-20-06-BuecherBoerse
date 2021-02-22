import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Marktplatz from './pages/Marktpkatz'
import OpenBook from './pages/OpenBook'
import UploadBook from './pages/UploadBook'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/'>
          <Marktplatz />
        </Route>
        <Route path='/uploadbook'>
          <UploadBook />
        </Route>
        <Route path='/openbook/:id'>
          <OpenBook />
        </Route>
      </Router>
    </>
  )
}

export default App
