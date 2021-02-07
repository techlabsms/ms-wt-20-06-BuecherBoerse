import React from 'react'

const Book = ({ id, img, title, author, genre }) => {
  return (
    <li className='book' key={id}>
      <img src={img} alt={title} />
      <div className='book-info'>
        <h4>{title}</h4>
        <p className='book-author'>{author}</p>
        <p className='book-genre'>{genre}</p>
      </div>
    </li>
  )
}

export default Book
