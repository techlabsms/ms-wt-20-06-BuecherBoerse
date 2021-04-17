import React, { useEffect, useCallback, useState, useContext } from 'react';
import { FaFlushed } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context';
import '../styles/UserAction.css';
import ActionButton from './ActionBtn';

const UserAction = (props) => {
  const { setAlert, jwt, API_USERS } = useContext(AppContext);
  const [user, setUser] = useState();

  const fetchUser = useCallback(async () => {
    try {
      if (!props.owner) {
        return null;
      }
      const res = await fetch(`${API_USERS}${props.owner}`, {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });
      if (res.ok) {
        const userInfo = await res.json();
        setUser(userInfo.name);
      } else {
        throw new Error('could not get user info');
      }
    } catch (err) {
      console.log(err);
    }
  }, [props.owner, jwt, API_USERS]);

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

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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
          <h3>{props.condition}</h3>
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
