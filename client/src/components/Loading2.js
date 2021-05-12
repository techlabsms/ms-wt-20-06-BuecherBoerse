import React from 'react';
import { useGlobalContext } from '../context/OverallContext';
import '../styles/Loading.css';

const Loading2 = () => {
  const { loading } = useGlobalContext();
  return (
    <>
      <div className={`${loading ? 'load-wrapper open' : 'load-wrapper'}`}>
        <div className='loader'></div>
      </div>
    </>
  );
};

export default Loading2;
