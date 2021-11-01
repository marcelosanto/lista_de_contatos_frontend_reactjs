import axios from 'axios'

const CONTATOS_API_BASE_URL = 'http://localhost:8080/api/v1/contatos'

class ContatosService {
  getContatos() {
    return axios.get(CONTATOS_API_BASE_URL)
  }

  createContato(contato) {
    return axios.post(CONTATOS_API_BASE_URL, contato)
  }

  getContatoById(contatoId) {
    return axios.get(`${CONTATOS_API_BASE_URL}/${contatoId}`)
  }

  updateContato(contatoId, contato) {
    return axios.put(`${CONTATOS_API_BASE_URL}/${contatoId}`, contato)
  }

  deleteContatoById(contatoId) {
    return axios.delete(`${CONTATOS_API_BASE_URL}/${contatoId}`)
  }
}

export default new ContatosService()
