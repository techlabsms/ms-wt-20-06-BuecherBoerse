import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Link.css'

const MenuLink = ({ id, url, text }) => {
  return (
    <li key={id} className='links'>
      <Link to={url}>{text}</Link>
    </li>
  )
}

export default MenuLink
