import { useCallback } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useGlobalContext } from '../context/OverallContext';

export const useMessaging = () => {
  const {
    setAlert,
    setShowMessageModal,
    setConversations,
    setChat,
    conversations,
    setNewMessage,
    scrollToBottom,
    setIsMessageSent,
    setLoading,
  } = useGlobalContext();

  const startNewConversation = async (api_messages, message) => {
    try {
      setLoading(true);
      const res = await fetch(`${api_messages}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      if (res.ok) {
        const writtenMessage = await res.json();
        console.log(writtenMessage);
        setAlert({
          display: true,
          icon: <FaCheckCircle />,
          msg: 'Nachricht wurde erfolgreich verschickt',
        });
        setShowMessageModal(false);
      } else {
        throw new Error('Nachricht konnte nicht verschickt werden');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setNewMessage({
        sender: '',
        reciever: '',
        message: '',
      });
    }
  };

  const fetchUserConversations = useCallback(
    async (api_messages_user, user_id) => {
      try {
        setLoading(true);
        const res = await fetch(`${api_messages_user}${user_id}`);
        if (res.ok) {
          let data = await res.json();
          const convList = data.reverse();
          setConversations(convList);
        } else {
          throw new Error('conversations could not be fetched');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [setConversations, setLoading]
  );

  const fetchMessages = useCallback(
    async (api_messages, conv_id, user_id) => {
      if (!conversations || !conv_id) {
        return null;
      }
      try {
        setLoading(true);
        const res = await fetch(`${api_messages}${conv_id}`);
        if (res.ok) {
          const singleConv = await res.json();
          setChat(singleConv);
          scrollToBottom.current.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
          });
          setNewMessage({
            sender: user_id,
            reciever:
              user_id === singleConv.recipients[0]._id
                ? singleConv.recipients[1]._id
                : singleConv.recipients[0]._id,
            message: '',
          });
        } else {
          throw new Error('could not get the conversation you are looking for');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setIsMessageSent(false);
      }
    },
    [
      conversations,
      setLoading,
      setChat,
      scrollToBottom,
      setNewMessage,
      setIsMessageSent,
    ]
  );

  const postMessage = async (api_messages, conv_id, message) => {
    try {
      setLoading(true);
      const res = await fetch(`${api_messages}${conv_id}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      if (res.ok) {
        await res.json();
      } else {
        throw new Error('Nachricht konnte nicht verschickt werden');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setNewMessage({
        sender: '',
        reciever: '',
        message: '',
      });
    }
  };
  return {
    startNewConversation,
    fetchUserConversations,
    fetchMessages,
    postMessage,
  };
};
