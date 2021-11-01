import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import ContatosService from '../services/ContatosService'

export default function CriarContatoComponente() {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [emailId, setEmailId] = useState('')

  let history = useHistory()

  const handleNomeChange = (envt) => {
    setNome(envt.target.value)
  }

  const handleSobrenomeChange = (envt) => {
    setSobrenome(envt.target.value)
  }

  const handleEmailChange = (envt) => {
    setEmailId(envt.target.value)
  }

  const handleSaveContato = (e) => {
    e.preventDefault()

    let contato = { nome: nome, sobrenome: sobrenome, emailId: emailId }
    ContatosService.createContato(contato).then((res) => history.push('/'))
  }

  const handlerCancelar = () => {
    history.push('/')
  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add Contato</h3>
            <div className='card-body'>
              <form>
                <div className='mb-3 row'>
                  <label className='form-label'>Nome: </label>
                  <input
                    placeholder='Nome'
                    name='nome'
                    className='form-control'
                    value={nome}
                    onChange={handleNomeChange}
                  />
                </div>

                <div className='mb-3 row'>
                  <label>Sobrenome: </label>
                  <input
                    placeholder='Sobrenome'
                    name='sobrenome'
                    className='form-control'
                    value={sobrenome}
                    onChange={handleSobrenomeChange}
                  />
                </div>

                <div className='mb-3 row'>
                  <label>Email: </label>
                  <input
                    placeholder='name@example.com'
                    name='email'
                    className='form-control'
                    value={emailId}
                    onChange={handleEmailChange}
                  />
                </div>

                <button className='btn btn-success' onClick={handleSaveContato}>
                  Salvar
                </button>

                <button
                  className='btn btn-danger'
                  style={{ marginLeft: '10px' }}
                  onClick={handlerCancelar}
                >
                  Cancelar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
