import React, { useContext } from 'react';
import { AppContext } from '../context';
import { useSignIn } from '../components/useSignIn';
import Alert from './Alert';

const auth = 'http://localhost:4000/auth/signin/';

const Login = () => {
  const { signInUser, userCredential, setUserCredential } = useSignIn(auth);
  const { alert } = useContext(AppContext);
  const { name, email, password } = userCredential;

  const checkLoginInput = (e) => {
    setUserCredential({
      ...userCredential,
      [e.target.name]: e.target.value,
    });
  };

  const loginNow = (e) => {
    e.preventDefault();
    signInUser();
  };

  return (
    <>
      <form className='form-center' onSubmit={loginNow}>
        <div className='title'>
          <h3>Willkommen zurück</h3>
        </div>
        <div className='form-control'>
          <label htmlFor='name' name='name'>
            Dein Username
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={checkLoginInput}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email' name='email'>
            Deine Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={checkLoginInput}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password' name='password'>
            Dein Passwort
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={checkLoginInput}
            required
          />
        </div>
        <button type='submit' className='btn' onSubmit={loginNow}>
          Einloggen
        </button>
      </form>
      {alert.display && <Alert />}
    </>
  );
};

export default Login;
