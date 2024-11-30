import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Compenents/Navbar/Navbar'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import Cart from './Page/Cart'
import LoginSingup from './Page/LoginSignup'
import Product from './Page/Product'
import ShopCategory from './Page/ShopCategory'
import Shop from './Page/Shop'
import Footer from './Compenents/Footer/Footer'
import men_banner from './Compenents/Assets/banner_mens.png'
import women_banner from './Compenents/Assets/banner_women.png'
import kid_banner from './Compenents/Assets/banner_kids.png'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSingup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
