import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Message = () => {
  return (
    <>
      <article className='message basic-flex'>
        <span className='user-icon basic-flex'>
          <FaUserCircle />
        </span>
        <aside className='glimpse-message'>
          <header className='message-header'>
            <h4 className='title'>User</h4>
            <h4>Datum - Uhrzeit</h4>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quisquam quas ullam aperiam ea adipisci!
          </p>
        </aside>
      </article>
    </>
  );
};

export default Message;
