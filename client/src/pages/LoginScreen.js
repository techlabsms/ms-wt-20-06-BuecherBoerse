import React from 'react';
import Login from '../components/Login';
import '../styles/LoginScreen.css';
import Tab from '../components/Tab';
import Signup from '../components/Signup';
import { useGlobalContext } from '../context/OverallContext';
import Loading2 from '../components/Loading2';
import Alert from '../components/Alert';

const LoginScreen = () => {
  const { alert, isTabLeft, loading } = useGlobalContext();

  return (
    <>
      {loading && <Loading2 />}
      <main className='hero'>
        <section className='signin-center'>
          <Tab />
          {isTabLeft ? <Login /> : <Signup />}
        </section>
      </main>
      {alert.display && <Alert />}
    </>
  );
};

export default LoginScreen;
