import { useEffect } from 'react';
import { FaFlushed } from 'react-icons/fa';
import { useGlobalContext } from '../context/OverallContext';
import { useBookData } from '../hooks/useBookData';
import ActionButton from './ActionBtn';

const UserAction = ({ owner, condition }) => {
  const { userId, setAlert, user, jwt, API_USERS, setShowMessageModal } =
    useGlobalContext();
  const { fetchUser } = useBookData();

  const notAvailable = () => {
    setAlert({
      display: true,
      icon: <FaFlushed />,
      msg: 'Diese Funktion ist noch nicht bereit...',
    });
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
            <ActionButton onClick={notAvailable}>Jetzt löschen</ActionButton>
          ) : (
            <ActionButton onClick={messageUser}>Jetzt ausleihen</ActionButton>
          )}
        </section>
      </aside>
    </>
  );
};

export default UserAction;
