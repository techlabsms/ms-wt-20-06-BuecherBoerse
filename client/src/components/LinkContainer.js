import React from 'react'
import '../styles/LinkContainer.css'
import Link from './Link'
import { links } from './linksDB'

const LinkContainer = () => {
  return (
    <ul className='links-container'>
      {links.map((link) => {
        return <Link key={link.id} {...link} />
      })}
    </ul>
  )
}

export default LinkContainer
