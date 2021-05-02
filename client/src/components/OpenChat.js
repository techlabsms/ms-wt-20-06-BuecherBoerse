import React, { useContext } from 'react';
import Message from './Message';
import Loading from './Loading';
import { AppContext } from '../context/OverallContext';

const OpenChat = ({ chat }) => {
  const { loading, scrollToBottom } = useContext(AppContext);
  const { recipients, messages } = chat;

  if (loading && chat.length < 1) {
    return (
      <section className='chat'>
        <Loading />
      </section>
    );
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
