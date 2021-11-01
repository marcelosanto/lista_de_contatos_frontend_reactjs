import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import ContatosService from '../services/ContatosService'

const ListaDeContatosComponente = () => {
  const [contatos, setContatos] = useState([])

  useEffect(() => {
    ContatosService.getContatos().then((res) => setContatos(res.data))
  }, [])

  let history = useHistory()

  function addContato() {
    history.push('add-contato')
  }

  return (
    <div>
      <h2 className='text-center'>Lista de Contatos</h2>

      <div className='row'>
        <button className='btn btn-primary' onClick={addContato}>
          Add Contato
        </button>
      </div>

      <div className='row'>
        <table className='table table-success table-stripe'>
          <thead>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Ação</th>
          </thead>
          <tbody>
            {contatos.map((contato) => (
              <tr key={contato.id}>
                <td>{contato.id}</td>
                <td>{contato.nome}</td>
                <td>{contato.sobrenome}</td>
                <td>{contato.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListaDeContatosComponente
