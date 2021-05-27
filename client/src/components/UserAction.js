import { useEffect } from 'react';
import { useGlobalContext } from '../context/OverallContext';
import { useBookData } from '../hooks/useBookData';
import ActionButton from './ActionBtn';

const UserAction = ({ id, owner, condition }) => {
  const {
    userId,
    user,
    jwt,
    API_BOOKS,
    API_USERS,
    setShowMessageModal,
    setShowEditBook,
  } = useGlobalContext();
  const { fetchUser, deleteSingleBook } = useBookData();

  const removeBook = () => {
    deleteSingleBook(API_BOOKS, id, jwt);
  };

  const messageUser = () => {
    sessionStorage.setItem('receiver', owner);
    setShowMessageModal(true);
  };

  useEffect(() => {
    fetchUser(owner, API_USERS, jwt);
  }, [owner, API_USERS, jwt, fetchUser]);

  return (
    <>
      <aside className='user-action'>
        <section className='action-section'>
          <p>Dieses Buch gehört:</p>
          <h3>{user}</h3>
        </section>
        <hr className='separation-line' />
        <section className='action-section'>
          <p>Zustand des Buches ist:</p>
          <h3>{condition}</h3>
        </section>
        <hr className='separation-line' />
        <section className='action-section'>
          <p>Was möchtest du tun?</p>
          {owner === userId ? (
            <>
              <ActionButton
                onClick={() => {
                  setShowEditBook(true);
                }}
              >
                Jetzt bearbeiten
              </ActionButton>
              <ActionButton onClick={removeBook}>Jetzt löschen</ActionButton>
            </>
          ) : (
            <ActionButton onClick={messageUser}>Jetzt ausleihen</ActionButton>
          )}
        </section>
      </aside>
    </>
  );
};

export default UserAction;
