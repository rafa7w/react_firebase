import React, { useState } from 'react'
import './Form.css'

function Form() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [res, setRes] = useState('')

  function handleEmail(event) {
    let email = event.target.value
    setEmail(email)
  }

  function handlePass(event) {
    let pass = event.target.value
    setPass(pass)
  }

  function addResponse(event) {
    event.preventDefault()
    if (email == 'eduardo.lino@pucpr.br' && pass == '123456') {
      setRes('Acessado com sucesso')
    } else {
      setRes('E-mail ou senha inválidos. Tente novamente!')
    }
  }

  return (
    <div className="container">
      <h1>Form ReactJS</h1>
      <form>
        <input onChange={handleEmail} type="text" placeholder="E-mail"></input>
        <input onChange={handlePass} type="password" placeholder="Password"></input>
        <button onClick={addResponse}>Acessar</button>
      </form>
      <p>{res}</p>
    </div>
  )
}

export default Form
