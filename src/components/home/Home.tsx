import React from 'react'
// interface
import { IHome } from './interface'
// component
import HomeView from './HomeView'

const Home: React.FC<IHome> = (props) => {
  const { bookCategory } = props

  return <HomeView bookCategory={bookCategory} />
}

export default Home
