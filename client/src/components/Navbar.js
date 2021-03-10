import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../static/buecherregal.svg';
import MenuLink from './MenuLink';
import LoginBtns from './LoginBtns';
import { links } from './linksDB';
import '../styles/Navbar.css';
import { AppContext } from '../context';
import UserBar from './UserBar';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const { isUserLoggedIn } = useContext(AppContext);

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
      <div className='nav-header basic-flex'>
        <Link to='/' className='basic-flex'>
          <img src={logo} alt='logo' />
        </Link>
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
        {isUserLoggedIn ? <UserBar /> : <LoginBtns />}
      </div>
    </nav>
  );
};

export default Navbar;
