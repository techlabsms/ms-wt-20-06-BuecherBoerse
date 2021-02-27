import React, { useState } from 'react';
import ReturnTo from '../components/ReturnTo';
import '../styles/UploadBook.css';
import Alert from '../components/Alert';

const UploadBook = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    language: '',
    condition: '',
    desc: '',
  });
  const [bookImage, setBookImage] = useState();
  const [alert, setAlert] = useState(false);

  const textChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  const imageChange = (e) => {
    setBookImage(e.target.files[0]);
  };

  const uploadAll = (e) => {
    e.preventDefault();
    console.log(bookImage, newBook);
    setAlert(true);
    setNewBook({
      title: '',
      author: '',
      genre: '',
      language: '',
      condition: '',
      desc: '',
    });
    setBookImage();
  };

  return (
    <main>
      <ReturnTo />
      <h2 className='title'>Buch hochladen</h2>
      <section className='section-center'>
        <form className='book-form' onSubmit={uploadAll}>
          <div className='form-control'>
            <label htmlFor='image' name='image'>
              Bild:
            </label>
            <input type='file' id='image' name='image' onChange={imageChange} />
          </div>
          <div className='form-control'>
            <label htmlFor='title' name='title'>
              Titel:
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Titel des Buches'
              value={newBook.title}
              onChange={textChange}
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='author' name='author'>
              Autor:
            </label>
            <input
              type='text'
              id='author'
              name='author'
              placeholder='Autor des Buches'
              value={newBook.author}
              onChange={textChange}
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='genre' name='genre'>
              Genre:
            </label>
            <input
              type='text'
              id='genre'
              name='genre'
              placeholder='Genre des Buches'
              value={newBook.genre}
              onChange={textChange}
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='language' name='language'>
              Sprache:
            </label>
            <input
              type='text'
              id='language'
              name='language'
              placeholder='Sprache des Buches'
              value={newBook.language}
              onChange={textChange}
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='condition' name='condition'>
              Zustand:
            </label>
            <input
              type='text'
              id='condition'
              name='condition'
              placeholder='Zustand des Buches'
              value={newBook.condition}
              onChange={textChange}
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='desc' name='desc'>
              Beschreibung:
            </label>
            <textarea
              id='desc'
              name='desc'
              placeholder='Kurze Beschreibung des Buches'
              cols='30'
              rows='5'
              value={newBook.desc}
              onChange={textChange}
            ></textarea>
          </div>
          <div className='btn-containr'>
            <button className='btn' type='submit' onSubmit={uploadAll}>
              Hochladen
            </button>
            <button className='btn' type='reset'>
              Löschen
            </button>
          </div>
        </form>
      </section>
      {alert && <Alert setAlert={setAlert} />}
    </main>
  );
};

export default UploadBook;
