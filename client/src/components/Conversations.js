import React, { useContext } from 'react';
import { AppContext } from '../context';
import Conversation from './Conversation';

const Conversations = ({ conversations, fetchMessages }) => {
  const { userId } = useContext(AppContext);

  return (
    <>
      <aside className='conversations'>
        {conversations.map((conversation) => {
          if (conversation.recipients[0] === userId) {
            return (
              <Conversation
                key={conversation._id}
                {...conversation}
                fetchMessages={fetchMessages}
              />
            );
          }
          return null;
        })}
      </aside>
    </>
  );
};

export default Conversations;
