import React from 'react'
// lib
import { Route, Routes } from 'react-router-dom'
// components
import Home from '../../components/home/Home'
import Cart from '../../components/cart/Cart'
import Notice from '../../components/notice/Notice'
import MyPage from '../../components/myPage/MyPage'

const Main: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </>
  )
}

export default Main
