import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import ContatosService from '../services/ContatosService'

const ListaDeContatosComponente = () => {
  const [contatos, setContatos] = useState([])
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    ContatosService.getContatos().then((res) => setContatos(res.data))
  }, [refresh])

  let history = useHistory()

  const addContato = () => {
    history.push('/add-contato/-1')
  }

  const handleEditarContato = (id) => {
    history.push(`/add-contato/${id}`)
  }

  const handleDeleteContato = (id) => {
    ContatosService.deleteContatoById(id).then((res) => {
      setRefresh((old) => old + 1)
    })
  }

  const handleVerContato = (id) => {
    history.push(`/contato/${id}`)
  }

  return (
    <div>
      <h2 className='text-center'>Lista de Contatos</h2>

      <div>
        <button
          className='btn btn-primary'
          style={{ margin: '20px' }}
          onClick={addContato}
        >
          Add Contato
        </button>
      </div>

      <div className='row'>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Nome</th>
              <th scope='col'>Sobrenome</th>
              <th scope='col'>Email</th>
              <th scope='col'>Ação</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato) => (
              <tr key={contato.id}>
                <th scope='row'>{contato.id}</th>
                <td>{contato.nome}</td>
                <td>{contato.sobrenome}</td>
                <td>{contato.emailId}</td>
                <td>
                  <button
                    className='btn btn-success'
                    onClick={() => handleEditarContato(contato.id)}
                  >
                    Editar
                  </button>
                  <button
                    className='btn btn-danger'
                    style={{ marginLeft: '10px' }}
                    onClick={() => handleDeleteContato(contato.id)}
                  >
                    Deletar
                  </button>
                  <button
                    className='btn btn-info'
                    style={{ marginLeft: '10px' }}
                    onClick={() => handleVerContato(contato.id)}
                  >
                    Visualizar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListaDeContatosComponente
