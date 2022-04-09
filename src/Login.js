import React, { useState } from 'react'
import './Form.css'

function Form() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const register = async () => {}
  const login = async () => {}
  const logout = async () => {}

  return (
    <div className="container">
      <div>
        <h3>Login User</h3>
        <input
          placeholder="Email"
          onChange={event => {
            setLoginEmail(event.target.value)
          }}
        />
        <input
          placeholder="Password"
          onChange={event => {
            setLoginPassword(event.target.value)
          }}
        />
        <button>Login</button>
      </div>
    </div>
  )
}

export default Form
