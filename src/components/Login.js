import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Login = ({isLoggedIn, findUser}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  if (isLoggedIn)
    return <Redirect to="/"/>

  return (
    <div className="login-wrapper">
      <form onSubmit={e => {
        e.preventDefault()
        findUser(login, password)
      }}>
        <input
          type="text"
          onChange={e => setLogin(e.target.value)} />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
