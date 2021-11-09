import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './layout/header/Header'
import Main from './layout/main/Main'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  )
}

export default App
