import axios from 'axios'

const CONTATOS_API_BASE_URL = 'http://localhost:8080/api/v1/contatos'

class ContatosService {
  getContatos() {
    return axios.get(CONTATOS_API_BASE_URL)
  }

  createContato(contato) {
    return axios.post(CONTATOS_API_BASE_URL, contato)
  }
}

export default new ContatosService()
