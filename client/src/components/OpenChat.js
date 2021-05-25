import Message from './Message';
import { useGlobalContext } from '../context/OverallContext';

const OpenChat = () => {
  const { chat, selectedConversation, scrollToBottom } = useGlobalContext();
  const { recipients, messages } = chat;

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
