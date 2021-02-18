import React from 'react'
import { FaTimes } from 'react-icons/fa'
import '../styles/UploadBook.css'

const UploadBook = ({ isPopupOpen, closePopup }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section
      className={`${
        isPopupOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <button className='close-modal-btn' onClick={closePopup}>
        <FaTimes />
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form'
          placeholder='Titel des Buches'
        ></input>
      </form>
    </section>
  )
}

export default UploadBook
