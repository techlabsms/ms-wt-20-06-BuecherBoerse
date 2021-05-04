import React from 'react';
import Login from '../components/Login';
import '../styles/LoginScreen.css';
import Tab from '../components/Tab';
import Signup from '../components/Signup';
import { useGlobalContext } from '../context/OverallContext';

const LoginScreen = () => {
  const { isTabLeft } = useGlobalContext();
  return (
    <>
      <main className='hero'>
        <section className='signin-center'>
          <Tab />
          {isTabLeft ? <Login /> : <Signup />}
        </section>
      </main>
    </>
  );
};

export default LoginScreen;
