import React from 'react';
import Conversation from './Conversation';

const Conversations = ({ conversations, fetchMessages }) => {
  return (
    <>
      <aside className='conversations'>
        {conversations.map((conversation) => {
          return (
            <Conversation
              key={conversation._id}
              {...conversation}
              fetchMessages={fetchMessages}
            />
          );
        })}
      </aside>
    </>
  );
};

export default Conversations;
