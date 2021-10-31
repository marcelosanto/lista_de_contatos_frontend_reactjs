import axios from 'axios'

const CONTATOS_API_BASE_URL = 'http://localhost:8080/api/v1/contatos'

class ContatosService {
  getContatos() {
    return axios.get(CONTATOS_API_BASE_URL)
  }
}

export default new ContatosService()
