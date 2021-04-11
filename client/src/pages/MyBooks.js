import React, { useContext } from 'react';
import { AppContext } from '../context';
import Shelf from '../components/Shelf';
import UserDashboard from '../components/UserDashboard';
import GenreFilter from '../components/GenreFilter';
import ReturnTo from '../components/ReturnTo';

const MyBooks = () => {
  const { closeSubmenu } = useContext(AppContext);
  return (
    <>
      <main onClick={closeSubmenu}>
        <ReturnTo />
        <UserDashboard />
        <GenreFilter />
        <Shelf />
      </main>
    </>
  );
};

export default MyBooks;
