import React from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { useGlobalContext } from '../context/OverallContext';
import '../styles/Messages.css';

const Messages = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <main onClick={closeSubmenu}>
        <section className='message-container'>
          <Conversations />
          <ChatWindow />
        </section>
      </main>
    </>
  );
};

export default Messages;
