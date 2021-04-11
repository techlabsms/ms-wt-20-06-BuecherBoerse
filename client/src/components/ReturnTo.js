import React from 'react';
import { Link } from 'react-router-dom';
import FilterButton from './FilterButton';

const ReturnTo = () => {
  return (
    <>
      <Link to='/'>
        <FilterButton>zurück</FilterButton>
      </Link>
    </>
  );
};

export default ReturnTo;
