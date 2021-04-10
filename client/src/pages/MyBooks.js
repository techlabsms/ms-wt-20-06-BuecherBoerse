import React, { useContext } from 'react';
import { AppContext } from '../context';
import Shelf from '../components/Shelf';
import UserDashboard from '../components/UserDashboard';
import GenreFilter from '../components/GenreFilter';

const MyBooks = () => {
  const { closeSubmenu } = useContext(AppContext);
  return (
    <>
      <main onClick={closeSubmenu}>
        <UserDashboard />
        <GenreFilter />
        <Shelf />
      </main>
    </>
  );
};

export default MyBooks;
