import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Conversation = () => {
  return (
    <>
      <button className='conversation basic-flex'>
        <span className='user-icon basic-flex'>
          <FaUserCircle />
        </span>
        <aside className='glimpse-message'>
          <h4>User</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </aside>
      </button>
    </>
  );
};

export default Conversation;
