import React from 'react'
import '../styles/Link.css'

const Link = ({ id, url, text }) => {
  return (
    <li key={id} className='links'>
      <a href={url}>{text}</a>
    </li>
  )
}

export default Link
