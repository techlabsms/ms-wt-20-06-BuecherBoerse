import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Conversation = ({ recipients, messages, fetchMessages }) => {
  const openConversation = () => {
    fetchMessages();
  };

  return (
    <>
      <button className='conversation basic-flex' onClick={openConversation}>
        <span className='user-icon basic-flex'>
          <FaUserCircle />
        </span>
        <aside className='glimpse-message'>
          <h4>{recipients[1]}</h4>
          <p>{messages}</p>
        </aside>
      </button>
    </>
  );
};

export default Conversation;
