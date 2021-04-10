import React from 'react';
import FilterButton from './FilterButton';
import Form from './Form';
import TextAreaInput from './TextAreaInput';
import OpenChat from './OpenChat';

const ChatWindow = () => {
  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <aside className='chat-window'>
        <OpenChat />
        <Form className='input-message' onSubmit={sendMessage}>
          <TextAreaInput cols='100' rows='3' />
          <FilterButton style={{ margin: '0' }}>Abschicken</FilterButton>
        </Form>
      </aside>
    </>
  );
};

export default ChatWindow;
