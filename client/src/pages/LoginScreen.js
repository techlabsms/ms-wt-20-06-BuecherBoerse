import React, { useContext } from 'react';
import Login from '../components/Login';
import '../styles/LoginScreen.css';
import Tab from '../components/Tab';
import Signup from '../components/Signup';
import { AppContext } from '../context';

const LoginScreen = () => {
  const { isTabLeft } = useContext(AppContext);
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
