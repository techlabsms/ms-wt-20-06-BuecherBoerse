import React from 'react';
import Message from './Message';
import Loading from './Loading';
import { useGlobalContext } from '../context/OverallContext';

const OpenChat = () => {
  const { chat, selectedConversation, scrollToBottom } = useGlobalContext();
  const { recipients, messages } = chat;

  if (chat.length < 1) {
    return (
      <section className='chat'>
        <Loading />
      </section>
    );
  }
  if (!selectedConversation) {
    return null;
  }
  return (
    <>
      <section className='chat'>
        {messages &&
          messages.map((message) => {
            return (
              <Message key={message._id} recipients={recipients} {...message} />
            );
          })}
        <div ref={scrollToBottom}></div>
      </section>
    </>
  );
};

export default OpenChat;
