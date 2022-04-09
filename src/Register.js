import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from './firebase-config'
import './Form.css'

function Form() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
    } catch (error) {
      console.log(error.message)
    }
  }
  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div className="container">
      <div>
        <h3>Register User</h3>
        <input
          placeholder="Email"
          onChange={event => {
            setRegisterEmail(event.target.value)
          }}
        />
        <input
          placeholder="Password"
          onChange={event => {
            setRegisterPassword(event.target.value)
          }}
        />
        <button onClick={register}>Create User</button>
      </div>
    </div>
  )
}

export default Form
