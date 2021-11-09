import React from 'react'
// lib
import { Route, Routes } from 'react-router-dom'
// components
import Home from '../../components/home/Home'

const Main: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Main
