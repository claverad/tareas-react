import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import Login from './components/Login.jsx';


function App() {

  return (
    <>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <RegisterPage /> */}
        <Login />
        <Footer />
      </div>
    </>
  )
}

export default App
