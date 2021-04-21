import React from 'react';
import Message from './Message';

const OpenChat = ({ chat }) => {
  const { messages } = chat;
  if (chat.length === 0) {
    return null;
  }
  return (
    <>
      <section className='chat'>
        {messages.map((message) => {
          return <Message key={message._id} {...message} />;
        })}
      </section>
    </>
  );
};

export default OpenChat;
