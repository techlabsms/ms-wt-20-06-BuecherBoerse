import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/OverallContext';
import { useMessaging } from '../hooks/useMessaging';
import Conversation from './Conversation';

const Conversations = () => {
  const {
    API_MESSAGESUSER,
    userId,
    isMessageSent,
    setIsMessageSent,
  } = useGlobalContext();
  const { fetchUserConversations } = useMessaging();

  useEffect(() => {
    fetchUserConversations(API_MESSAGESUSER, userId);
  }, [
    API_MESSAGESUSER,
    fetchUserConversations,
    isMessageSent,
    setIsMessageSent,
    userId,
  ]);

  const { conversations } = useGlobalContext();
  return (
    <>
      <aside className='conversations'>
        {conversations.map((conversation) => {
          return <Conversation key={conversation._id} {...conversation} />;
        })}
      </aside>
    </>
  );
};

export default Conversations;
