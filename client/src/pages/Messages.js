import React, { useState, useEffect, useContext, useCallback } from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { AppContext } from '../context';
import '../styles/Messages.css';
const API_MESSAGES = '/api/messages/';
const API_MESSAGESUSER = '/api/messages/user/';

const Messages = () => {
  const receiverId = sessionStorage.getItem('receiver');
  const { closeSubmenu, userId } = useContext(AppContext);
  const [chat, setChat] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [newMessage, setNewMessage] = useState({
    sender: userId,
    reciever: receiverId,
    message: '',
  });

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

  const postMessage = async (message) => {
    try {
      let convId = sessionStorage.getItem('convId');
      const res = await fetch(`${API_MESSAGES}${convId}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      if (res.ok) {
        const writtenMessage = await res.json();
        console.log(writtenMessage);
      } else {
        throw new Error('Nachricht konnte nicht verschickt werden');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setNewMessage({
        sender: userId,
        reciever: receiverId,
        message: '',
      });
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
          <ChatWindow
            chat={chat}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            postMessage={postMessage}
          />
        </section>
      </main>
    </>
  );
};

export default Messages;
