import React, { useState } from 'react';
import Login from '../components/Login';
import '../styles/LoginScreen.css';
import ReturnTo from '../components/ReturnTo';
import Tab from '../components/Tab';
import Signup from '../components/Signup';

const LoginScreen = () => {
  const [isTabLeft, setIsTabLeft] = useState(true);

  return (
    <main className='hero'>
      <ReturnTo />
      <section className='signin-center'>
        <Tab isTabLeft={isTabLeft} setIsTabLeft={setIsTabLeft} />
        {isTabLeft ? <Login /> : <Signup />}
      </section>
    </main>
  );
};

export default LoginScreen;
