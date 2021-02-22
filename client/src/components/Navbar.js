import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../buecherregal.svg'
import '../styles/Navbar.css'
import LinkContainer from './LinkContainer'
import LoginBtns from './LoginBtns'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const stickyNav = () => {
    if (window.scrollY >= 120) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', stickyNav)

  return (
    <nav
      className={navbar ? 'nav-center sticky-nav animate-nav' : 'nav-center'}
    >
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <button
          className='nav-toggle'
          onClick={() => {
            setShowLinks(!showLinks)
          }}
        >
          <FaBars />
        </button>
      </div>
      <div className={showLinks ? 'nav-menu show-menu' : 'nav-menu'}>
        <LinkContainer />
        <LoginBtns />
      </div>
    </nav>
  )
}

export default Navbar
