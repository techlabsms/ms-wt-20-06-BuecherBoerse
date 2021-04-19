import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Message = ({ message, sender, reciever }) => {
  return (
    <>
      <article className='message basic-flex'>
        <span className='user-icon basic-flex'>
          <FaUserCircle />
        </span>
        <aside className='glimpse-message'>
          <header className='message-header'>
            <h4 className='title'>{sender}</h4>
          </header>
          <p>{message}</p>
        </aside>
      </article>
    </>
  );
};

export default Message;
