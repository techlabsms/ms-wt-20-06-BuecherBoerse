import React from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { useGlobalContext } from '../context/OverallContext';
import '../styles/Messages.css';
import Loading2 from '../components/Loading2';
import { motion } from 'framer-motion';

const Messages = () => {
  const { closeSubmenu, loading } = useGlobalContext();

  return (
    <>
      {loading && <Loading2 />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={closeSubmenu}
      >
        <section className='message-container'>
          <Conversations />
          <ChatWindow />
        </section>
      </motion.main>
    </>
  );
};

export default Messages;
