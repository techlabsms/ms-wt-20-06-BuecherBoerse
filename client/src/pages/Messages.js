import React, { useContext } from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { AppContext } from '../context';
import '../styles/Messages.css';

const Messages = () => {
  const { closeSubmenu } = useContext(AppContext);
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
