import React, { useContext } from 'react';
import { AppContext } from '../context';
import { useSignIn } from '../components/useSignIn';
import Alert from './Alert';
const create = 'http://localhost:4000/api/users';

const Signup = () => {
  const { signInUser, userCredential, setUserCredential } = useSignIn(create);
  const { alert } = useContext(AppContext);
  const { name, email, password } = userCredential;

  const checkSignupInput = (e) => {
    setUserCredential({
      ...userCredential,
      [e.target.name]: e.target.value,
    });
  };

  const signupNow = (e) => {
    e.preventDefault();
    signInUser();
  };

  return (
    <>
      <form className='form-center' onSubmit={signupNow}>
        <div className='title'>
          <h3>Melde dich jetzt an!</h3>
        </div>
        <div className='form-control'>
          <label htmlFor='name' name='name'>
            Dein Wunsch-Username
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={checkSignupInput}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email' name='email'>
            Deine bevorzugte Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={checkSignupInput}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password' name='password'>
            Dein bärenstarkes Passwort
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={checkSignupInput}
            required
          />
        </div>
        <button type='submit' className='btn'>
          Registrieren
        </button>
      </form>
      {alert.display && <Alert />}
    </>
  );
};

export default Signup;
