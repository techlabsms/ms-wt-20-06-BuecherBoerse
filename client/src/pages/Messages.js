import React, { useState, useEffect, useContext, useCallback } from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { AppContext } from '../context';
import '../styles/Messages.css';
const API_MESSAGES = '/api/messages/';
const API_MESSAGESUSER = '/api/messages/user/';

const Messages = () => {
  const { closeSubmenu, userId } = useContext(AppContext);
  const [chat, setChat] = useState([]);
  const [conversations, setConversations] = useState([]);

  const fetchUserConversations = useCallback(async () => {
    try {
      const res = await fetch(`${API_MESSAGESUSER}${userId}`);
      if (res.ok) {
        const convList = await res.json();
        console.log(convList);
        sessionStorage.setItem('convId', convList[0]._id);
        setConversations(convList);
      } else {
        throw new Error('conversations could not be fetched');
      }
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  const fetchMessages = async () => {
    try {
      let convId = sessionStorage.getItem('convId');
      const res = await fetch(`${API_MESSAGES}${convId}`);
      if (res.ok) {
        const singleConv = await res.json();
        console.log(singleConv);
        setChat(singleConv);
      } else {
        throw new Error('could not get the conversation you are looking for');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserConversations();
  }, [fetchUserConversations]);

  return (
    <>
      <main onClick={closeSubmenu}>
        <section className='message-container'>
          <Conversations
            conversations={conversations}
            fetchMessages={fetchMessages}
          />
          <ChatWindow chat={chat} />
        </section>
      </main>
    </>
  );
};

export default Messages;
