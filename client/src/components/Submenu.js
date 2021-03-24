import React, { useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';
import '../styles/Submenu.css';
const signOut = 'http://localhost:4000/auth/signout';

const Submenu = () => {
  const getLoggedOut = async () => {
    try {
      const res = await fetch(signOut);
      if (res.status >= 200 && res.status <= 299) {
        const userLoggedOut = await res.json();
        localStorage.clear();
        console.log('Erfolgreich ausgeloggt!', userLoggedOut);
      } else {
        throw new Error('Hoppala, da ist wohl was schief gelaufen...');
      }
      setIsUserLoggedIn(false);
    } catch (error) {
      console.log('Das hat nicht geklappt', error);
    }
  };
  const { setIsUserLoggedIn, isSubmenuOpen, location } = useContext(AppContext);
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { divCenter, divBottom } = location;
    submenu.style.left = `${divCenter}px`;
    submenu.style.bottom = `${divBottom}px`;
  }, [location]);
  const logout = () => {
    getLoggedOut();
  };
  return (
    <>
      <ul
        className={`${isSubmenuOpen ? 'user-submenu show' : 'user-submenu'}`}
        ref={container}
      >
        <li className='links'>
          <span>Account</span>
        </li>
        <li className='links'>
          <Link to='/' onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Submenu;
