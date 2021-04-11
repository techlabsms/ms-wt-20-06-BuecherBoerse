import React from 'react';
import '../styles/UserAction.css';
import ActionButton from './ActionBtn';

const UserAction = (props) => {
  const name = sessionStorage.getItem('name');
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
          <ActionButton>Jetzt vormerken</ActionButton>
          <ActionButton>Jetzt ausleihen</ActionButton>
        </section>
      </aside>
    </>
  );
};

export default UserAction;
