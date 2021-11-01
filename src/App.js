import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import ContatoComponente from './components/ContatoComponente'
import FooterComponente from './components/FooterComponente'
import HeaderComponente from './components/HeaderComponente'
import ListaDeContatosComponente from './components/ListaDeContatosComponente'
import ViewContatoComponent from './components/ViewContatoComponent'

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
            <Route path='/add-contato/:id'>
              <ContatoComponente />
            </Route>
            <Route path='/contato/:id'>
              <ViewContatoComponent />
            </Route>
          </Switch>
        </div>
        <FooterComponente />
      </Router>
    </>
  )
}

export default App
