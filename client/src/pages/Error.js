import React, { useContext } from 'react';
import { AppContext } from '../context/OverallContext';
import { FaMeh } from 'react-icons/fa';
import ReturnTo from '../components/ReturnTo';
import '../styles/Error.css';

const Error = () => {
  const { closeSubmenu } = useContext(AppContext);
  return (
    <>
      <main onClick={closeSubmenu}>
        <ReturnTo />
        <section className='error-page basic-flex'>
          <span className='error-icon'>
            <FaMeh />
          </span>
          <h3 className='title error-title'>
            Ooops, sieht aus als wäre die aktuelle Seite noch in Bearbeitung
            (oder nicht verfügbar).
          </h3>
        </section>
      </main>
    </>
  );
};

export default Error;
