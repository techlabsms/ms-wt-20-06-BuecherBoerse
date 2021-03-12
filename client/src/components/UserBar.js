import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/UserBar.css';
import Submenu from '../components/Submenu';
import { AppContext } from '../context';

const UserBar = () => {
  const { openSubmenu, isSubmenuOpen, closeSubmenu } = useContext(AppContext);
  const showUserSubmenu = (e) => {
    const divSize = e.currentTarget.getBoundingClientRect();
    const divCenter = (divSize.left + divSize.right) / 2;
    const divBottom = divSize.bottom - 3;
    openSubmenu({ divCenter, divBottom });
  };

  return (
    <>
      <button
        className='user-bar basic-flex helper'
        onClick={isSubmenuOpen ? closeSubmenu : showUserSubmenu}
      >
        <span className='user-info helper'>Hallo UserXYZ</span>
        <span className='user-icon basic-flex helper'>
          <FaUserCircle />
        </span>
      </button>
      <Submenu />
    </>
  );
};

export default UserBar;
