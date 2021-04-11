import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginBtns.css';
import { login } from '../utils/linksDB';

const LoginBtns = () => {
  return (
    <>
      <section className='login'>
        {login.map((loginBtn) => {
          const { id, url, text } = loginBtn;
          return (
            <Link to={url} key={id}>
              <button className='login-btn'>{text}</button>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default LoginBtns;
