import React from 'react';

const Signup = () => {
  const signupNow = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form className='form-center' onSubmit={signupNow}>
        <div className='title'>
          <h3>Melde dich jetzt an!</h3>
        </div>
        <div className='form-control'>
          <label htmlFor='username' name='username'>
            Username
          </label>
          <input type='text' id='username' name='username' />
        </div>
        <div className='form-control'>
          <label htmlFor='firstname' name='firstname'>
            Email
          </label>
          <input type='text' id='email' name='email' />
        </div>
        <div className='form-control'>
          <label htmlFor='password' name='password'>
            Passwort
          </label>
          <input type='text' id='lastname' name='lastname' />
        </div>
        <button className='btn'>Registrieren</button>
      </form>
    </React.Fragment>
  );
};

export default Signup;
