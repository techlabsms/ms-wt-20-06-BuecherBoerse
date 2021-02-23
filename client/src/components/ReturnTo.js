import React from 'react'
import { Link } from 'react-router-dom'

const ReturnTo = () => {
  return (
    <div className='btn-container'>
      <Link to='/' className='btn'>
        zurück zum Marktpkatz
      </Link>
    </div>
  )
}

export default ReturnTo
