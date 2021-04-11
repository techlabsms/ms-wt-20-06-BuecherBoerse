import React, { useContext } from 'react';
import { AppContext } from '../context';
import { useSignIn } from './useSignIn';
import InputField from './InputField';
import SigninBtn from './SigninBtn';
import Alert from './Alert';
import Form from './Form';
const create = '/api/users';

const Signup = () => {
  const { signInUser, userCredential, setUserCredential } = useSignIn();
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
    signInUser(create);
  };

  return (
    <>
      <Form className='form-center' onSubmit={signupNow}>
        <div className='title'>
          <h3>Melde dich jetzt an!</h3>
        </div>
        <section className='form'>
          <InputField
            type='text'
            htmlFor='Dein Wunsch-Username:'
            name='name'
            id='name'
            value={name}
            onChange={checkSignupInput}
            required
          />
          <InputField
            type='text'
            htmlFor='Deine bevorzugte Email:'
            name='email'
            id='email'
            value={email}
            onChange={checkSignupInput}
            required
          />
          <InputField
            type='password'
            htmlFor='Dein bärenstarkes Passwort:'
            name='password'
            id='password'
            value={password}
            onChange={checkSignupInput}
            required
          />
          <SigninBtn type='submit'>Registrieren</SigninBtn>
        </section>
      </Form>
      {alert.display && <Alert />}
    </>
  );
};

export default Signup;
