import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginBtns.css';
import { login } from './linksDB';

const LoginBtns = () => {
  return (
    <section className='login'>
      {login.map((loginBtn) => {
        const { id, url, text } = loginBtn;
        return (
          <Link key={id} to={url}>
            <button className='login-btn'>{text}</button>
          </Link>
        );
      })}
    </section>
  );
};

export default LoginBtns;
