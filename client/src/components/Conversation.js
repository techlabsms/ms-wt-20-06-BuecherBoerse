import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AppContext } from '../context';

const Conversation = ({ _id, recipients, messages, fetchMessages }) => {
  const { userName } = useContext(AppContext);
  const openConversation = (e) => {
    fetchMessages(e.currentTarget.id);
  };

  return (
    <>
      <button
        id={_id}
        className='conversation basic-flex'
        onClick={openConversation}
      >
        <span className='user-icon basic-flex'>
          <FaUserCircle />
        </span>
        <aside className='glimpse-message'>
          <h4>
            {userName === recipients[0].name
              ? recipients[1].name
              : recipients[0].name}
          </h4>
          <p>{`Letzte Nachricht: ${messages[messages.length - 1].message}`}</p>
        </aside>
      </button>
    </>
  );
};

export default Conversation;
