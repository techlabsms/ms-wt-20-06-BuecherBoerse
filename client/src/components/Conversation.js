import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useMessaging } from '../hooks/useMessaging';
import { useGlobalContext } from '../context/OverallContext';

const Conversation = ({ _id, recipients, messages }) => {
  const { userName, API_MESSAGES, userId } = useGlobalContext();
  const { fetchMessages } = useMessaging();

  const openConversation = (e) => {
    fetchMessages(API_MESSAGES, e.currentTarget.id, userId);
    sessionStorage.setItem('convId', e.currentTarget.id);
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
          <p>{`${
            messages[messages.length - 1].sender === recipients[0]._id
              ? recipients[0].name
              : recipients[1].name
          }: ${messages[messages.length - 1].message}`}</p>
        </aside>
      </button>
    </>
  );
};

export default Conversation;
