import React, { useContext } from 'react';
import { AppContext } from '../context';
import Shelf from '../components/Shelf';

const MyBooks = () => {
  const { books, loading, closeSubmenu } = useContext(AppContext);
  return (
    <>
      <main onClick={closeSubmenu}>
        <Shelf books={books} loading={loading} />
      </main>
    </>
  );
};

export default MyBooks;
