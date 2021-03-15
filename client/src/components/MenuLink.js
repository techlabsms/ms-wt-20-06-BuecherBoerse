import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/MenuLink.css';

const MenuLink = ({ id, url, text }) => {
  return (
    <>
      <li key={id} className='links basic-flex'>
        <NavLink to={url}>{text}</NavLink>
      </li>
    </>
  );
};

export default MenuLink;
