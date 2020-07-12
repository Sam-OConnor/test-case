import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Login = ({isLoggedIn, findUser}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  if (isLoggedIn)
    return <Redirect to="/"/>

  return (
    <form
      className="form"
      onSubmit={e => {
      e.preventDefault()
      findUser(login, password)
    }}>
      <label>
        *Login
        <input
          type="text"
          name="login"
          onChange={e => setLogin(e.target.value)} />
      </label>
      <label>
        *Password
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)} />
      </label>
      <button>Login</button>
    </form>
  )
}

export default Login
