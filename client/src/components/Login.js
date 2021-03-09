import React, { useContext, useState } from 'react';
import { FaPoop } from 'react-icons/fa';
import { AppContext } from '../context';
import Alert from './Alert';

const auth = 'http://localhost:4000/auth/signin/';

const Login = () => {
  const [userCredential, setUserCredential] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { alert, setAlert } = useContext(AppContext);
  const { name, email, password } = userCredential;

  const checkLoginInput = (e) => {
    setUserCredential({
      ...userCredential,
      [e.target.name]: e.target.value,
    });
  };

  const loginNow = (e) => {
    e.preventDefault();
    const userLogin = new FormData();
    userLogin.append('name', name);
    userLogin.append('email', email);
    userLogin.append('password', password);
    fetch(auth, {
      method: 'POST',
      body: userLogin,
    })
      .then((res) => {
        if (res >= 200 && res <= 200) {
          return res.json();
        } else {
          throw new Error('Hoppala, da ist was falsch gelaufen!');
        }
      })
      .then((userLoggedIn) => console.log('Success!', userLoggedIn))
      .catch((error) => {
        console.log(error);
        setAlert({
          display: true,
          icon: <FaPoop />,
          msg: 'Login hat nicht geklappt',
        });
      });
    setUserCredential({ name: '', email: '', password: '' });
  };

  return (
    <React.Fragment>
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
            type='text'
            id='password'
            name='password'
            value={password}
            onChange={checkLoginInput}
            required
          />
        </div>
        <button className='btn' onSubmit={loginNow}>
          Einloggen
        </button>
      </form>
      {alert.display && <Alert />}
    </React.Fragment>
  );
};

export default Login;
