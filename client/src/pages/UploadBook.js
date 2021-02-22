import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/UploadBook.css'

const UploadBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <main>
      <div className='btn-container'>
        <Link to='/' className='btn'>
          zurück zum Marktpkatz
        </Link>
      </div>
      <h2 className='title'>Buch hochladen</h2>
      <section className='section-center'>
        <form className='book-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='image' name='image'>
              bild:
            </label>
            <input
              type='file'
              id='image'
              name='image'
              placeholder='Bild des Buches'
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='title' name='title'>
              titel:
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Titel des Buches'
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='author' name='author'>
              autor:
            </label>
            <input
              type='text'
              id='author'
              name='author'
              placeholder='Autor des Buches'
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='genre' name='genre'>
              genre:
            </label>
            <input
              type='text'
              id='genre'
              name='genre'
              placeholder='Genre des Buches'
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='language' name='language'>
              sprache:
            </label>
            <input
              type='text'
              id='language'
              name='language'
              placeholder='Sprache des Buches'
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='condition' name='condition'>
              zustand:
            </label>
            <input
              type='text'
              id='condition'
              name='condition'
              placeholder='Zustand des Buches'
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='desc' name='desc'>
              beschreibung:
            </label>
            <input
              type='text'
              id='desc'
              name='desc'
              placeholder='Kurze Beschreibung des Buches'
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='checker1' name='checker1'>
              verleihen:
            </label>
            <input type='checkbox' id='checker1' name='checker1' />
            <label htmlFor='checker2' name='checker2'>
              tauschen:
            </label>
            <input type='checkbox' id='checker2' name='checker2' />
          </div>
          <div className='btn-containr'>
            <button className='btn' type='submit'>
              hochladen
            </button>
            <button className='btn' type='reset'>
              löschen
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default UploadBook
