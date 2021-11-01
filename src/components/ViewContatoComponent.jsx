import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import ContatosService from '../services/ContatosService'

export default function ViewContatoComponent() {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [emailId, setEmailId] = useState('')

  let history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    ContatosService.getContatoById(id).then((res) => {
      let contato = res.data
      setNome(contato.nome)
      setSobrenome(contato.sobrenome)
      setEmailId(contato.emailId)
    })
  }, [])

  return (
    <div className='card' style={{ marginTop: '20px' }}>
      <div className='card-header'>CONTATO</div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{nome}</li>
        <li className='list-group-item'>{sobrenome}</li>
        <li className='list-group-item'>{emailId}</li>
      </ul>
    </div>
  )
}
