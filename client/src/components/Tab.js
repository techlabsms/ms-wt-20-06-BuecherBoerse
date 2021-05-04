import React from 'react';
import { useGlobalContext } from '../context/OverallContext';
import '../styles/Tab.css';

const Tab = () => {
  const { isTabLeft, setIsTabLeft } = useGlobalContext();
  return (
    <>
      <div className='tab-container'>
        <button
          className={`tab-btn ${!isTabLeft && 'not-active'}`}
          onClick={() => {
            setIsTabLeft(true);
          }}
        >
          Login
        </button>
        <button
          className={`tab-btn ${isTabLeft && 'not-active'}`}
          onClick={() => {
            setIsTabLeft(false);
          }}
        >
          Registrieren
        </button>
      </div>
    </>
  );
};

export default Tab;
