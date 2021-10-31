import React from 'react'
import './App.css'

import FooterComponente from './components/FooterComponente'
import HeaderComponente from './components/HeaderComponente'
import ListaDeContatosComponente from './components/ListaDeContatosComponente'

function App() {
  return (
    <>
      <HeaderComponente />
      <div className='container'>
        <ListaDeContatosComponente />
      </div>
      <FooterComponente />
    </>
  )
}

export default App
