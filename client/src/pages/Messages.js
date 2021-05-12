import React from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { useGlobalContext } from '../context/OverallContext';
import '../styles/Messages.css';
import Loading2 from '../components/Loading2';

const Messages = () => {
  const { closeSubmenu, loading } = useGlobalContext();

  return (
    <>
      {loading && <Loading2 />}
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
