import React, { useContext } from 'react';
import GenreFilter from '../components/GenreFilter';
import Shelf from '../components/Shelf';
// import availableBooks from '../components/books';
import SearchBar from '../components/SearchBar';
import { AppContext } from '../context';
import { FaBookDead } from 'react-icons/fa';

const Marktplatz = () => {
  const { books, closeSubmenu } = useContext(AppContext);

  if (books.length < 1) {
    return (
      <>
        <main onClick={closeSubmenu}>
          <section className='error-page basic-flex'>
            <span className='error-icon'>
              <FaBookDead />
            </span>
            <h3 className='title'>
              Es sind aktuell keine Bücher in unserer Datenbank... Lade schnell
              welche hoch und erzähle es deinen Freunden!
            </h3>
          </section>
        </main>
      </>
    );
  }
  return (
    <>
      <main onClick={closeSubmenu}>
        <SearchBar />
        <GenreFilter />
        <Shelf />
      </main>
    </>
  );
};

export default Marktplatz;
