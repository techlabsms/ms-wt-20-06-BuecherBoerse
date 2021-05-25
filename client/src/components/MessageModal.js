import Form from './Form';
import TextAreaInput from './TextAreaInput';
import FilterButton from './FilterButton';
import { useGlobalContext } from '../context/OverallContext';
import { useMessaging } from '../hooks/useMessaging';

const MessageModal = () => {
  const {
    API_MESSAGES,
    userId,
    showMessageModal,
    setShowMessageModal,
    setIsMessageSent,
    newMessage,
    setNewMessage,
  } = useGlobalContext();
  const { startNewConversation } = useMessaging();

  let recieverID = sessionStorage.getItem('receiver');

  const closeMessageModal = () => {
    setShowMessageModal(false);
    sessionStorage.removeItem('receiver');
  };
  return (
    <>
      <main
        className={`${
          showMessageModal ? 'modal-wrapper open' : 'modal-wrapper'
        }`}
      >
        <aside className='msg-modal'>
          <h3 className='modal-title'>Deine Nachricht:</h3>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              startNewConversation(API_MESSAGES, newMessage);
              setIsMessageSent(true);
              sessionStorage.removeItem('receiver');
            }}
          >
            <TextAreaInput
              name='message'
              value={newMessage.message}
              onChange={(e) => {
                setNewMessage({
                  sender: userId,
                  reciever: recieverID,
                  message: e.target.value,
                });
              }}
            />
            <FilterButton type='submit' style={{ margin: '1rem' }}>
              Abschicken
            </FilterButton>
            <FilterButton
              onClick={closeMessageModal}
              style={{ margin: '1rem' }}
            >
              Abbrechen
            </FilterButton>
          </Form>
        </aside>
      </main>
    </>
  );
};

export default MessageModal;
