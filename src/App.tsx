import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './asset/css/GlobalStyle'
import Header from './layout/header/Header'
import Main from './layout/main/Main'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </>
  )
}

export default App
