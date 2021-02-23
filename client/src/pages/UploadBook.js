import React, { useState } from 'react'
import ReturnTo from '../components/ReturnTo'
import '../styles/UploadBook.css'

const UploadBook = () => {
  const [newBook, setNewBook] = useState({
    image: '',
    title: '',
    author: '',
    genre: '',
    language: '',
    condition: '',
    desc: '',
  })
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setNewBook({ ...newBook, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newBook)
    setNewBook({
      image: '',
      title: '',
      author: '',
      genre: '',
      language: '',
      condition: '',
      desc: '',
    })
  }
  return (
    <main>
      <ReturnTo />
      <h2 className='title'>Buch hochladen</h2>
      <section className='section-center'>
        <form className='book-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='image' name='image'>
              bild:
            </label>
            <input type='file' id='image' name='image'></input>
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
              value={newBook.title}
              onChange={handleChange}
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
              value={newBook.author}
              onChange={handleChange}
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
              value={newBook.genre}
              onChange={handleChange}
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
              value={newBook.language}
              onChange={handleChange}
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
              value={newBook.condition}
              onChange={handleChange}
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='desc' name='desc'>
              beschreibung:
            </label>
            <textarea
              id='desc'
              name='desc'
              placeholder='Kurze Beschreibung des Buches'
              cols='30'
              rows='5'
              value={newBook.desc}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='btn-containr'>
            <button className='btn' type='submit' onSubmit={handleSubmit}>
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
