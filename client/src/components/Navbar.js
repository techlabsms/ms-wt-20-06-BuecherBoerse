import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../static/buecherregal.svg';
import MenuLink from './MenuLink';
import LoginBtns from './LoginBtns';
import { links } from './linksDB';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const stickyNav = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', stickyNav);

  return (
    <nav
      className={navbar ? 'nav-center sticky-nav animate-nav' : 'nav-center'}
    >
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <button
          className='nav-toggle'
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <FaBars />
        </button>
      </div>
      <div className={showLinks ? 'nav-menu show-menu' : 'nav-menu'}>
        <ul className='links-container'>
          {links.map((link) => {
            return <MenuLink key={link.id} {...link} />;
          })}
        </ul>
        <LoginBtns />
      </div>
    </nav>
  );
};

export default Navbar;
