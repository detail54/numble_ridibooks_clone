import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './asset/css/GlobalStyle'
import Footer from './layout/footer/Footer'
import Header from './layout/header/Header'
import Main from './layout/main/Main'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
