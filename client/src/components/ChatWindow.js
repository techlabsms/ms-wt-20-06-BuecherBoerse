import { useEffect } from 'react';
import FilterButton from './FilterButton';
import Form from './Form';
import OpenChat from './OpenChat';
import { useMessaging } from '../hooks/useMessaging';
import { useGlobalContext } from '../context/OverallContext';

const ChatWindow = () => {
  const {
    API_MESSAGES,
    userId,
    jwt,
    chat,
    newMessage,
    setNewMessage,
    setIsMessageSent,
  } = useGlobalContext();
  const { postMessage, fetchMessages } = useMessaging();

  const handleMessage = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    postMessage(API_MESSAGES, chat._id, jwt, newMessage);
    setIsMessageSent(true);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      sendMessage(e);
    }
  };

  useEffect(() => {
    fetchMessages(API_MESSAGES, sessionStorage.getItem('convId'), jwt, userId);
  }, [API_MESSAGES, fetchMessages, jwt, userId]);

  return (
    <>
      <aside className='chat-window'>
        <OpenChat />
        <Form className='input-message' onSubmit={sendMessage}>
          <textarea
            className='enter-message'
            name='message'
            value={newMessage.message}
            onChange={handleMessage}
            onKeyPress={handleKeyPress}
          />
          <FilterButton type='submit' style={{ margin: '0' }}>
            Abschicken
          </FilterButton>
        </Form>
      </aside>
    </>
  );
};

export default ChatWindow;
