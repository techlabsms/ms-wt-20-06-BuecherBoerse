import React, { useEffect } from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { useGlobalContext } from '../context/OverallContext';
import { useMessaging } from '../hooks/useMessaging';
import '../styles/Messages.css';

const Messages = () => {
  const {
    closeSubmenu,
    API_MESSAGES,
    API_MESSAGESUSER,
    userId,
    isMessageSent,
    setIsMessageSent,
  } = useGlobalContext();
  const { fetchUserConversations, fetchMessages } = useMessaging();
  let convId = sessionStorage.getItem('convId');

  useEffect(() => {
    fetchUserConversations(API_MESSAGESUSER, userId);
  }, [
    API_MESSAGESUSER,
    fetchUserConversations,
    isMessageSent,
    setIsMessageSent,
    userId,
  ]);

  useEffect(() => {
    fetchMessages(API_MESSAGES, convId, userId);
    return () => {
      setIsMessageSent(false);
    };
  }, [
    API_MESSAGES,
    fetchMessages,
    isMessageSent,
    setIsMessageSent,
    userId,
    convId,
  ]);

  return (
    <>
      <main onClick={closeSubmenu}>
        <section className='message-container'>
          <Conversations />
          <ChatWindow />
        </section>
      </main>
    </>
  );
};

export default Messages;
