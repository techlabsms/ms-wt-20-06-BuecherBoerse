import React from 'react';
import FilterButton from './FilterButton';
import Form from './Form';
import TextAreaInput from './TextAreaInput';
import OpenChat from './OpenChat';

const ChatWindow = ({ chat, newMessage, setNewMessage, postMessage }) => {
  const handleMessage = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    postMessage(chat._id, newMessage);
  };

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
