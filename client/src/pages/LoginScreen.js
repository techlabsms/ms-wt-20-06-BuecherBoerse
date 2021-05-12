import React from 'react';
import Login from '../components/Login';
import '../styles/LoginScreen.css';
import Tab from '../components/Tab';
import Signup from '../components/Signup';
import { useGlobalContext } from '../context/OverallContext';
import Loading2 from '../components/Loading2';

const LoginScreen = () => {
  const { isTabLeft, loading } = useGlobalContext();

  return (
    <>
      {loading && <Loading2 />}
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
