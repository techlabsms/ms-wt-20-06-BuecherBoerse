import React, { useState } from 'react';

const create = 'http://localhost:4000/api/users';

const Signup = () => {
  const [newUserCredential, setNewUserCredential] = useState({
    name: '',
    email: '',
    password: '',
  });
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
      .catch((error) => console.log(error));
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
            Username
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
            Email
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
            Passwort
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
    </React.Fragment>
  );
};

export default Signup;
