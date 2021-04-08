import React from 'react';
import '../styles/ActionBtn.css';

const ActionBtn = (props) => {
  return (
    <>
      <button className='action-btn' {...props}>
        {props.children}
      </button>
    </>
  );
};

export default ActionBtn;
