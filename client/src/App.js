import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Marktplatz from './pages/Marktpkatz'
import OpenBook from './pages/OpenBook'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/'>
          <Marktplatz />
        </Route>
        <Route path='/openbook/:id'>
          <OpenBook />
        </Route>
      </Router>
    </>
  )
}

export default App
