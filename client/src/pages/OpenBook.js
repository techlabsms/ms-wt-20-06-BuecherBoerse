import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import books from '../components/books'
import '../styles/OpenBook.css'

const OpenBook = () => {
  const [openBook, setOpenBook] = useState({})
  const { id } = useParams()

  useEffect(() => {
    let fetchBook = books.find((book) => book.id === parseInt(id))
    setOpenBook(fetchBook)
    console.log(fetchBook)
  }, [id])

  const { img, title, author, genre, desc } = openBook
  return (
    <main>
      <div className='btn-container'>
        <Link to='/' className='btn'>
          zurück zum Marktpkatz
        </Link>
      </div>
      <section className='open-book'>
        <h2 className='title'>{title}</h2>
        <h3 className='title italic'>{author}</h3>
        <img src={img} alt={title} />
        <div className='open-book-info'>
          <header>
            <h3>beschreibung</h3>
            <p>{desc}</p>
          </header>
          <p>
            genre: <span>{genre}</span>
          </p>
          <footer>
            <button className='btn'>Jetzt vormerken</button>
            <button className='btn'>Jetzt ausleihen</button>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default OpenBook
