import { useGlobalContext } from '../context/OverallContext';
import Conversation from './Conversation';

const Conversations = () => {
  const { conversations } = useGlobalContext();

  return (
    <>
      <aside className='conversations'>
        {conversations.map((conversation) => {
          return <Conversation key={conversation._id} {...conversation} />;
        })}
      </aside>
    </>
  );
};

export default Conversations;
