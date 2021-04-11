import React from 'react';
import '../styles/SigninBtn.css';

const SigninBtn = (props) => {
  return (
    <>
      <button className='signin-btn' {...props}>
        {props.children}
      </button>
    </>
  );
};

export default SigninBtn;
