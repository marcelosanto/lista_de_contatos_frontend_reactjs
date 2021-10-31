import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
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
            <Route path='/' component={ListaDeContatosComponente}></Route>
            <Route
              path='/contatos'
              component={ListaDeContatosComponente}
            ></Route>
          </Switch>
        </div>
        <FooterComponente />
      </Router>
    </>
  )
}

export default App
