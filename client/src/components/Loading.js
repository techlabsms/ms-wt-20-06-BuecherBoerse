import React from 'react';
import '../styles/Loading.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading = () => {
  return (
    <>
      <div className='loading'>
        <Loader type='Oval' color='#b00055' height={120} width={120} />
      </div>
    </>
  );
};

export default Loading;
