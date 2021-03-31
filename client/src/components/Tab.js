import React, { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/Tab.css';

const Tab = () => {
  const { isTabLeft, setIsTabLeft } = useContext(AppContext);
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
