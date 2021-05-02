import React, { useContext } from 'react';
import Form from './Form';
import TextAreaInput from './TextAreaInput';
import FilterButton from './FilterButton';
import { AppContext } from '../context/OverallContext';
import '../styles/MessageModal.css';

const MessageModal = () => {
  const {
    userId,
    newMessage,
    setNewMessage,
    startNewConversation,
    showMessageModal,
    setShowMessageModal,
  } = useContext(AppContext);

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
            className='msg-modal-form'
            onSubmit={(e) => {
              e.preventDefault();
              startNewConversation(newMessage);
            }}
          >
            <TextAreaInput
              cols='100'
              rows='3'
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
