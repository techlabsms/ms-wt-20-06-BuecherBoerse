import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaBookOpen } from 'react-icons/fa';
import logo from '../static/buecherregal.svg';
import MenuLink from './MenuLink';
import LoginBtns from './LoginBtns';
import { links } from '../utils/linksDB';
import '../styles/Navbar.css';
import { AppContext } from '../context';
import UserBar from './UserBar';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const {
    showLinks,
    setShowLinks,
    hideLinks,
    isUserLoggedIn,
    closeSubmenu,
  } = useContext(AppContext);

  useEffect(() => {
    const stickyNav = () => {
      if (window.scrollY >= 120) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener('scroll', stickyNav);
    return () => {
      window.removeEventListener('scroll', stickyNav);
    };
  });

  const toggleNavbar = () => {
    setShowLinks(!showLinks);
  };

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains('helper')) {
      closeSubmenu();
    }
  };
  return (
    <>
      <nav
        className={navbar ? 'nav-center sticky-nav animate-nav' : 'nav-center'}
        onClick={hideSubmenu}
      >
        <header className='nav-content'>
          <div className='nav-header basic-flex'>
            <Link to='/' className='basic-flex' onClick={hideLinks}>
              <img src={logo} alt='logo' />
            </Link>
            <button className='nav-toggle' onClick={toggleNavbar}>
              {showLinks ? <FaBookOpen /> : <FaBook />}
            </button>
          </div>
          <div className={showLinks ? 'nav-menu show-menu' : 'nav-menu'}>
            <ul className='links-container basic-flex'>
              {links.map((link) => {
                return <MenuLink key={link.id} {...link} />;
              })}
            </ul>
            {isUserLoggedIn ? <UserBar /> : <LoginBtns />}
          </div>
        </header>
      </nav>
    </>
  );
};

export default Navbar;
