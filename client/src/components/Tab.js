import React from 'react';
import '../styles/Tab.css';

const Tab = ({ isTabLeft, setIsTabLeft }) => {
  return (
    <React.Fragment>
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
          Anmelden
        </button>
      </div>
    </React.Fragment>
  );
};

export default Tab;
