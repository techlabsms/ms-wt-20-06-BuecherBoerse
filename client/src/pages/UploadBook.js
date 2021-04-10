import React, { useState, useContext } from 'react';
import ReturnTo from '../components/ReturnTo';
import '../styles/UploadBook.css';
import Alert from '../components/Alert';
import ImageUploader from '../components/ImageUploader';
import InputField from '../components/InputField';
import { FaCheckCircle, FaFlushed, FaPoo } from 'react-icons/fa';
import { AppContext } from '../context';
import TextAreaInput from '../components/TextAreaInput';
import ActionBtn from '../components/ActionBtn';
import Form from '../components/Form';

const api = '/api/books/';

const UploadBook = () => {
  const bookUpload = async (formdata) => {
    try {
      const res = await fetch(api, {
        method: 'POST',
        body: formdata,
      });
      if (res.status >= 200 && res.status <= 299) {
        const userBook = await res.json();
        console.log(userBook);
        setAlert({
          display: true,
          icon: <FaCheckCircle />,
          msg: 'Das Buch wurde erfolgreich hinzugefügt',
        });
      } else {
        throw new Error('Hoppala, da ist was schief gegangen');
      }
    } catch (error) {
      console.log('Hochladen fehlgeschlagen', error);
      setAlert({
        display: true,
        icon: <FaPoo />,
        msg: 'Das hat irgendwie nicht geklappt...',
      });
    } finally {
      setNewBook({
        name: '',
        author: '',
        genre: '',
        language: '',
        condition: '',
        desc: '',
      });
      setBookImage();
    }
  };

  const [newBook, setNewBook] = useState({
    name: '',
    author: '',
    genre: '',
    language: '',
    condition: '',
    desc: '',
  });
  const [bookImage, setBookImage] = useState();
  const { alert, setAlert, closeSubmenu, setIsBookUploaded } = useContext(
    AppContext
  );
  const { name, author, genre, language, condition, desc } = newBook;

  const textChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const uploadAll = (e) => {
    e.preventDefault();
    if (name && author && genre && language && condition && desc) {
      let bookData = new FormData();
      bookData.append('bookImage', bookImage);
      bookData.append('name', name);
      bookData.append('author', author);
      bookData.append('category', genre);
      bookData.append('language', language);
      bookData.append('condition', condition);
      bookData.append('description', desc);
      bookUpload(bookData);
      setIsBookUploaded(true);
    } else {
      setAlert({
        display: true,
        icon: <FaFlushed />,
        msg: 'Halt, da fehlen paar Felder!',
      });
    }
  };

  return (
    <>
      <main onClick={closeSubmenu}>
        <ReturnTo />
        <h2 className='title'>Buch hochladen</h2>
        <Form className='book-form' onSubmit={uploadAll}>
          <ImageUploader bookImage={bookImage} setBookImage={setBookImage} />
          <div className='info-upload'>
            <InputField
              type='text'
              htmlFor='Name:'
              name='name'
              id='name'
              placeholder='Name des Buches'
              value={name}
              onChange={textChange}
            />
            <InputField
              type='text'
              htmlFor='Autor:'
              name='author'
              id='author'
              placeholder='Autor des Buches'
              value={author}
              onChange={textChange}
            />
            <InputField
              type='text'
              htmlFor='Genre:'
              name='genre'
              id='genre'
              placeholder='Genre des Buches'
              value={genre}
              onChange={textChange}
            />
            <InputField
              type='text'
              htmlFor='Sprache:'
              name='language'
              id='language'
              placeholder='Sprache des Buches'
              value={language}
              onChange={textChange}
            />
            <InputField
              type='text'
              htmlFor='Zustand:'
              name='condition'
              id='condition'
              placeholder='Zustand des Buches'
              value={condition}
              onChange={textChange}
            />
            <TextAreaInput
              htmlFor='Beschreibung:'
              name='desc'
              id='desc'
              cols='30'
              rows='5'
              placeholder='Kurze Beschreibung des Buches'
              value={desc}
              onChange={textChange}
            />
            <div className='action-btn-container'>
              <ActionBtn type='submit'>Hochladen</ActionBtn>
              <ActionBtn
                type='reset'
                onClick={() => {
                  setBookImage();
                  setNewBook({
                    name: '',
                    author: '',
                    genre: '',
                    language: '',
                    condition: '',
                    desc: '',
                  });
                }}
              >
                Löschen
              </ActionBtn>
            </div>
          </div>
        </Form>
        {alert.display && <Alert />}
      </main>
    </>
  );
};

export default UploadBook;
