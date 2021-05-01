import React, { useEffect } from 'react';
import FilterButton from './FilterButton';
import Form from './Form';
import TextAreaInput from './TextAreaInput';
import OpenChat from './OpenChat';

const ChatWindow = ({
  chat,
  newMessage,
  setNewMessage,
  isMessageSent,
  setIsMessageSent,
  postMessage,
  fetchMessages,
}) => {
  const handleMessage = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    postMessage(chat._id, newMessage);
    setIsMessageSent(true);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      sendMessage(e);
    }
  };

  useEffect(() => {
    fetchMessages(sessionStorage.getItem('convId'));
    return () => {
      setIsMessageSent(false);
    };
  }, [fetchMessages, isMessageSent, setIsMessageSent]);

  return (
    <>
      <aside className='chat-window'>
        <OpenChat chat={chat} />
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
