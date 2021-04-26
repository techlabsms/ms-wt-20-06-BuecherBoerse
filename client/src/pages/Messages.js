import React, { useState, useEffect, useContext, useCallback } from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { AppContext } from '../context';
import '../styles/Messages.css';
const API_MESSAGESUSER = '/api/messages/user/';

const Messages = () => {
  const {
    closeSubmenu,
    userId,
    newMessage,
    setNewMessage,
    postMessage,
    API_MESSAGES,
  } = useContext(AppContext);
  const [chat, setChat] = useState([]);
  const [conversations, setConversations] = useState([]);

  const fetchUserConversations = useCallback(async () => {
    try {
      const res = await fetch(`${API_MESSAGESUSER}${userId}`);
      if (res.ok) {
        const convList = await res.json();
        console.log(convList);
        setConversations(convList);
      } else {
        throw new Error('conversations could not be fetched');
      }
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  const fetchMessages = useCallback(async () => {
    if (!conversations) {
      return null;
    }
    try {
      const res = await fetch(`${API_MESSAGES}${conversations._id}`);
      if (res.ok) {
        const singleConv = await res.json();
        console.log(singleConv);
        setChat(singleConv);
        setNewMessage({
          sender: userId,
          reciever:
            userId === singleConv.recipients[0]._id
              ? singleConv.recipients[1]._id
              : singleConv.recipients[0]._id,
          message: '',
        });
      } else {
        throw new Error('could not get the conversation you are looking for');
      }
    } catch (error) {
      console.log(error);
    }
  }, [API_MESSAGES, userId, conversations, setNewMessage]);

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
          <ChatWindow
            chat={chat}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            postMessage={postMessage}
            fetchMessages={fetchMessages}
          />
        </section>
      </main>
    </>
  );
};

export default Messages;
