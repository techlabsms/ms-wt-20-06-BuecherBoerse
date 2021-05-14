import React from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { useGlobalContext } from '../context/OverallContext';
import '../styles/Messages.css';
import Loading2 from '../components/Loading2';
import { motion } from 'framer-motion';
import EmptyShelf from '../components/EmptyShelf';

const Messages = () => {
  const { closeSubmenu, loading, conversations } = useGlobalContext();

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
        {conversations ? (
          <section className='message-container'>
            <Conversations />
            <ChatWindow />
          </section>
        ) : (
          <EmptyShelf>
            Zurzeit befinden sich keine Nachrichten hier. Stöbere im Bücherregal
            und schreibe einen User an, um die Nachrichtenfunktion zu
            aktivieren.
          </EmptyShelf>
        )}
      </motion.main>
    </>
  );
};

export default Messages;
