import React from 'react'
import { login } from './linksDB'

const LoginBtns = () => {
  return (
    <section className='login'>
      {login.map((loginBtn) => {
        const { id, url, text } = loginBtn
        return (
          <button key={id} className='login-btn'>
            <a href={url}>{text}</a>
          </button>
        )
      })}
    </section>
  )
}

export default LoginBtns
