import React, { useEffect } from 'react';
import '../styles/Alert.css';

const Alert = ({ icon, msg, setAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      setAlert({ display: false, icon: '', msg: '' });
    }, 3000);
  });

  return (
    <div className='alert basic-flex'>
      <span className='icon basic-flex'>{icon}</span>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
