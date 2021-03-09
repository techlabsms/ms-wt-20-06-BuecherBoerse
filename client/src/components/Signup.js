import React, { useContext, useState } from 'react';
import { FaPoop } from 'react-icons/fa';
import { AppContext } from '../context';
import Alert from './Alert';

const create = 'http://localhost:4000/api/users';

const Signup = () => {
  const [newUserCredential, setNewUserCredential] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { alert, setAlert } = useContext(AppContext);
  const { name, email, password } = newUserCredential;

  const checkSignupInput = (e) => {
    setNewUserCredential({
      ...newUserCredential,
      [e.target.name]: e.target.value,
    });
  };

  const signupNow = (e) => {
    e.preventDefault();
    const userSignup = new FormData();
    userSignup.append('name', name);
    userSignup.append('email', email);
    userSignup.append('password', password);
    fetch(create, {
      method: 'POST',
      body: userSignup,
    })
      .then((res) => {
        if (res >= 200 && res <= 299) {
          return res.json();
        } else {
          throw new Error('Hoppala, da ist wohl was schief gelaufen');
        }
      })
      .then((userCreated) => console.log('Success!', userCreated))
      .catch((error) => {
        console.log(error);
        setAlert({
          display: true,
          icon: <FaPoop />,
          msg: 'Das Anmelden hat nicht funktioniert',
        });
      });
    setNewUserCredential({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <React.Fragment>
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
            type='text'
            id='password'
            name='password'
            value={password}
            onChange={checkSignupInput}
            required
          />
        </div>
        <button className='btn'>Registrieren</button>
      </form>
      {alert.display && <Alert />}
    </React.Fragment>
  );
};

export default Signup;
