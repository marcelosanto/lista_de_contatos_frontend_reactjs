import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import CriarContatoComponente from './components/CriarContatoComponente'
import FooterComponente from './components/FooterComponente'
import HeaderComponente from './components/HeaderComponente'
import ListaDeContatosComponente from './components/ListaDeContatosComponente'

function App() {
  return (
    <>
      <Router>
        <HeaderComponente />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <ListaDeContatosComponente />
            </Route>
            <Route path='/contatos'>
              <ListaDeContatosComponente />
            </Route>
            <Route path='/add-contato'>
              <CriarContatoComponente />
            </Route>
          </Switch>
        </div>
        <FooterComponente />
      </Router>
    </>
  )
}

export default App
