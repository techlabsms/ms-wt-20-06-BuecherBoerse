import React from 'react'
import { FaTimes } from 'react-icons/fa'
import '../styles/OpenBook.css'

const OpenBook = ({ isPopupOpen, closePopup }) => {
  return (
    <section
      className={`${
        isPopupOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <article className='open-book'>
        <img src='./img/fitzek-heimweg.jpeg' alt='fitzek-heimweg' />
        <aside className='open-book-info'>
          <header>
            <button className='close-modal-btn' onClick={closePopup}>
              <FaTimes />
            </button>
            <h1>der heimweg </h1>
            <h3>sebastian fitzek</h3>
          </header>
          <section>
            <h2>beschreibung</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              accusamus maiores vero sed ad similique commodi veritatis.
              Sapiente iure quam facilis nesciunt beatae mollitia expedita
              eligendi esse magnam dolores. Molestias temporibus earum iusto
              minus! Quasi natus provident eos!
            </p>
          </section>
          <footer>
            <button className='action-btn'>Jetzt vormerken</button>
            <button className='action-btn'>Jetzt ausleihen</button>
          </footer>
        </aside>
      </article>
    </section>
  )
}

export default OpenBook
