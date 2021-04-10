import React, { useContext } from 'react';
import { FaFlushed } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context';
import '../styles/UserAction.css';
import ActionButton from './ActionBtn';

const UserAction = (props) => {
  const { setAlert } = useContext(AppContext);
  const name = sessionStorage.getItem('name');
  const pushToMessages = useHistory();
  const notAvailable = () => {
    setAlert({
      display: true,
      icon: <FaFlushed />,
      msg: 'Diese Funktion ist noch nicht bereit...',
    });
  };
  const messageUser = () => {
    pushToMessages.push('/messages');
  };

  return (
    <>
      <aside className='user-action'>
        <section className='action-section'>
          <p>Dieses Buch gehört:</p>
          <h3>{name}</h3>
        </section>
        <hr className='separation-line' />
        <section className='action-section'>
          <p>Zustand des Buches ist:</p>
          <h3>{props.children}</h3>
        </section>
        <hr className='separation-line' />
        <section className='action-section'>
          <p>Was möchtest du tun?</p>
          <ActionButton onClick={notAvailable}>Jetzt vormerken</ActionButton>
          <ActionButton onClick={messageUser}>Jetzt ausleihen</ActionButton>
        </section>
      </aside>
    </>
  );
};

export default UserAction;
