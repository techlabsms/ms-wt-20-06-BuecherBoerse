import React, { useContext } from 'react';
import { FaFileImage } from 'react-icons/fa';
import { AppContext } from '../context/OverallContext';
import '../styles/ImageUploader.css';

const ImageUploader = () => {
  const { bookImage, setBookImage } = useContext(AppContext);
  const imageChange = (e) => {
    setBookImage(e.target.files[0]);
  };
  return (
    <>
      <div className='image-upload'>
        <label htmlFor='image' name='image' className='upload-icon'>
          <FaFileImage />
        </label>
        <input
          type='file'
          id='image'
          name='image'
          className='file-input'
          onChange={imageChange}
        />
        <p className='file-info'>Lade hier ein Bild deines Buches hoch</p>
        <p className='file-name'>
          {bookImage ? bookImage.name : 'Kein Bild ausgewählt'}
        </p>
      </div>
    </>
  );
};

export default ImageUploader;
