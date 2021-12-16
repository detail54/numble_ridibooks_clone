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
      <BrowserRouter basename='https://detail54.github.io/numble_ridibooks_clone/'>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
