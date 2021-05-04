import React from 'react';
import FilterButton from './FilterButton';
import Form from './Form';
import TextAreaInput from './TextAreaInput';
import OpenChat from './OpenChat';
import { useMessaging } from '../hooks/useMessaging';
import { useGlobalContext } from '../context/OverallContext';

const ChatWindow = () => {
  const {
    API_MESSAGES,
    chat,
    newMessage,
    setNewMessage,
    setIsMessageSent,
  } = useGlobalContext();
  const { postMessage } = useMessaging();

  const handleMessage = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    postMessage(API_MESSAGES, chat._id, newMessage);
    setIsMessageSent(true);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      sendMessage(e);
    }
  };

  return (
    <>
      <aside className='chat-window'>
        <OpenChat />
        <Form className='input-message' onSubmit={sendMessage}>
          <TextAreaInput
            cols='100'
            rows='3'
            name='message'
            value={newMessage.message}
            onChange={handleMessage}
            onKeyPress={handleKeyPress}
          />
          <FilterButton type='submit' style={{ margin: '0' }}>
            Abschicken
          </FilterButton>
        </Form>
      </aside>
    </>
  );
};

export default ChatWindow;
