import React from 'react'
import { links } from './linksDB'

const LinkContainer = () => {
  return (
    <ul className='links-container'>
      {links.map((link) => {
        const { id, url, text } = link
        return (
          <li key={id} className='links'>
            <a href={url}>{text}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default LinkContainer
