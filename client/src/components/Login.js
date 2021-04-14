import React, { useContext } from 'react';
import { AppContext } from '../context';
import { useSignIn } from '../components/useSignIn';
import Alert from './Alert';
import InputField from './InputField';
import SigninBtn from './SigninBtn';
import Form from './Form';
const API_AUTH = '/auth/signin/';

const Login = () => {
  const { signInUser, userCredential, setUserCredential } = useSignIn();
  const { alert, isTabLeft } = useContext(AppContext);
  const { name, email, password } = userCredential;

  const checkLoginInput = (e) => {
    setUserCredential({
      ...userCredential,
      [e.target.name]: e.target.value,
    });
  };

  const loginNow = (e) => {
    e.preventDefault();
    signInUser(API_AUTH, isTabLeft);
  };

  return (
    <>
      <Form className='form-center' onSubmit={loginNow}>
        <div className='title'>
          <h3>Willkommen zurück</h3>
        </div>
        <section className='form'>
          <InputField
            type='text'
            htmlFor='Dein Username:'
            name='name'
            id='name'
            value={name}
            onChange={checkLoginInput}
            required
          />
          <InputField
            type='text'
            htmlFor='Deine Email:'
            name='email'
            id='email'
            value={email}
            onChange={checkLoginInput}
            required
          />
          <InputField
            type='password'
            htmlFor='Dein Passwort:'
            name='password'
            id='password'
            value={password}
            onChange={checkLoginInput}
            required
          />
          <SigninBtn type='submit'>Einloggen</SigninBtn>
        </section>
      </Form>
      {alert.display && <Alert />}
    </>
  );
};

export default Login;
