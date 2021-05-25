import { useEffect } from 'react';
import Conversations from '../components/Conversations';
import ChatWindow from '../components/ChatWindow';
import { useGlobalContext } from '../context/OverallContext';
import { useMessaging } from '../hooks/useMessaging';
import Loading2 from '../components/Loading2';
import { motion } from 'framer-motion';
import EmptyShelf from '../components/EmptyShelf';

const Messages = () => {
  const {
    closeSubmenu,
    API_MESSAGESUSER,
    loading,
    userId,
    jwt,
    conversations,
    isMessageSent,
    setIsMessageSent,
  } = useGlobalContext();

  const { fetchUserConversations } = useMessaging();

  useEffect(() => {
    fetchUserConversations(API_MESSAGESUSER, userId, jwt);
  }, [
    API_MESSAGESUSER,
    fetchUserConversations,
    isMessageSent,
    setIsMessageSent,
    userId,
    jwt,
  ]);

  return (
    <>
      {loading && <Loading2 />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={closeSubmenu}
      >
        {conversations.length < 1 ? (
          <EmptyShelf>
            Aktuell hast du noch keine Nachrichten verfasst. Schreibe einem
            User, indem du ein Buch auswählst und auf "Jetzt ausleihen" klickst.
          </EmptyShelf>
        ) : (
          <section className='message-container'>
            <Conversations />
            <ChatWindow />
          </section>
        )}
      </motion.main>
    </>
  );
};

export default Messages;
