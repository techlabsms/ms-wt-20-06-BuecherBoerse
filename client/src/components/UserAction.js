import React from 'react';
import '../styles/UserAction.css';

const UserAction = (props) => {
  return (
    <>
      <aside className='user-action'>
        <section className='action-section'>
          <p>Dieses Buch gehört:</p>
          <h3>User XYZ</h3>
        </section>
        <hr className='separation-line' />
        <section className='action-section'>
          <p>Zustand des Buches ist:</p>
          <h3>{props.condition}</h3>
        </section>
        <hr className='separation-line' />
        <section className='action-section'>
          <p>Was möchtest du tun?</p>
          <button className='action-btn'>Jetzt vormerken</button>
          <button className='action-btn'>Jetzt ausleihen</button>
        </section>
      </aside>
    </>
  );
};

export default UserAction;
