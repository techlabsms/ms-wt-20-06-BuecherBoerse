import React from 'react'
import '../styles/LinkContainer.css'
import MenuLink from './MenuLink'
import { links } from './linksDB'

const LinkContainer = () => {
  return (
    <ul className='links-container'>
      {links.map((link) => {
        return <MenuLink key={link.id} {...link} />
      })}
    </ul>
  )
}

export default LinkContainer
