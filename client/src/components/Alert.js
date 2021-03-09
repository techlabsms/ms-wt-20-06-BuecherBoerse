import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context';
import '../styles/Alert.css';

const Alert = () => {
  const { alert, setAlert } = useContext(AppContext);
  useEffect(() => {
    setTimeout(() => {
      setAlert({ display: false, icon: '', msg: '' });
    }, 3000);
  });

  return (
    <div className='alert basic-flex'>
      <span className='icon basic-flex'>{alert.icon}</span>
      <p>{alert.msg}</p>
    </div>
  );
};

export default Alert;
