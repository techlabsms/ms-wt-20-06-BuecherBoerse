import React from 'react';
import { footer } from './linksDB';
import MenuLink from './MenuLink';
import { FaHeart } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <ul className='footer-container'>
          {footer.map((link) => {
            return <MenuLink key={link.id} {...link} />;
          })}
        </ul>
        <p>
          coded with{' '}
          <span className='heart'>
            <FaHeart />
          </span>{' '}
          in Münster
        </p>
      </footer>
    </>
  );
};

export default Footer;
