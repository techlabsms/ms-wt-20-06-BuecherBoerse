import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/MenuLink.css';
import { AppContext } from '../context';

const MenuLink = ({ id, url, text }) => {
  const { hideLinks } = useContext(AppContext);
  return (
    <>
      <li key={id} className='links basic-flex'>
        <NavLink to={url} onClick={hideLinks}>
          {text}
        </NavLink>
      </li>
    </>
  );
};

export default MenuLink;
