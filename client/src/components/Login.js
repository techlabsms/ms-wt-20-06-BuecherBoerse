import React from 'react';

const Login = () => {
  const loginNow = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form className='form-center' onSubmit={loginNow}>
        <div className='title'>
          <h3>Willkommen zurück</h3>
        </div>
        <div className='form-control'>
          <label htmlFor='username' name='username'>
            Dein Username
          </label>
          <input type='text' id='username' name='username' />
        </div>
        <div className='form-control'>
          <label htmlFor='password' name='password'>
            Dein Passwort
          </label>
          <input type='text' id='password' name='password' />
        </div>
        <button className='btn' onSubmit={loginNow}>
          Einloggen
        </button>
      </form>
    </React.Fragment>
  );
};

export default Login;
