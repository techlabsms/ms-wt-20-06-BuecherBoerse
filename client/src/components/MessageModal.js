import Form from './Form';
import TextAreaInput from './TextAreaInput';
import FilterButton from './FilterButton';
import { useGlobalContext } from '../context/OverallContext';
import { useMessaging } from '../hooks/useMessaging';
import ModalWrapper from './ModalWrapper';

const MessageModal = () => {
  const {
    API_MESSAGES,
    userId,
    jwt,
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
      <ModalWrapper showMessageModal={showMessageModal}>
        <aside className='msg-modal'>
          <h3 className='modal-title'>Deine Nachricht:</h3>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              startNewConversation(API_MESSAGES, jwt, newMessage);
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
      </ModalWrapper>
    </>
  );
};

export default MessageModal;
