import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Reviews from './components/Reviews'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className='relative'>
      <NavBar/>
      <Home/>
      <Introduction/>
      <Skills/>
      <Reviews/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App
