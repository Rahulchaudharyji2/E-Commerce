import { useState } from 'react'

import './App.css'

import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
//import all pages
import AllProduct from './components/Pages/AllProduct'
import Cart from './components/Pages/Cart'
import Login from './components/Pages/Login'
import New from './components/NewForm/NewForm';
import Register from './components/Pages/Register'
import SearchBar from "./components/SearchBar/SearchBar"

import SearchResults from './components/Pages/SearchResults';
function App() {


  return (
    <>
      <Layout>
      
        <Routes>
          <Route path='/' element={<AllProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/new' element={<New />} />
          <Route path="/" element={<SearchBar />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Layout>

    </>
  )
}

export default App
