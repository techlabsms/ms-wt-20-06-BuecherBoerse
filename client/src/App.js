import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Marktplatz from './pages/Marktpkatz'
import OpenBook from './components/OpenBook'

const App = () => {
  const [isPopupOpen, setIsPopOpen] = useState(false)
  const openPopup = () => {
    setIsPopOpen(true)
  }
  const closePopup = () => {
    setIsPopOpen(false)
  }

  return (
    <>
      <Navbar />
      <OpenBook isPopupOpen={isPopupOpen} closePopup={closePopup} />
      <main>
        <Marktplatz openPopup={openPopup} />
      </main>
    </>
  )
}

export default App
