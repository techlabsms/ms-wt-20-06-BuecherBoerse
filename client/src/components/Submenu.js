import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/OverallContext';
import { useSignIn } from '../hooks/useSignIn';
import '../styles/Submenu.css';

const Submenu = () => {
  const { isSubmenuOpen, location, AUTH_SIGNOUT } = useGlobalContext();
  const { getLoggedOut } = useSignIn();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { divCenter, divBottom } = location;
    submenu.style.left = `${divCenter}px`;
    submenu.style.bottom = `${divBottom}px`;
  }, [location]);

  const logout = () => {
    getLoggedOut(AUTH_SIGNOUT);
  };

  return (
    <>
      <ul
        className={`${isSubmenuOpen ? 'user-submenu show' : 'user-submenu'}`}
        ref={container}
      >
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
