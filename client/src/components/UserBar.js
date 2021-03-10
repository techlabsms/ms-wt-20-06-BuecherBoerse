import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/UserBar.css';

const UserBar = () => {
  return (
    <div className='user-bar basic-flex'>
      <span>Hallo UserXYZ</span>
      <span className='user-icon basic-flex'>
        <FaUserCircle />
      </span>
    </div>
  );
};

export default UserBar;
