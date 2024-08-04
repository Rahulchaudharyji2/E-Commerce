import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Layout = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
    
      <main>
      <ToastContainer />
        {props.children}
      </main>
      <footer></footer>
    </>
  )
}

export default Layout