import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/About/Hero'
import Skills from './Components/Skills/Skills'
import Project from './Components/Projects/Project'
import Connect from './Components/Contact/Connect'
function App() {
 
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Project/>
        <Connect/>
      </div>

    </>
  )
}

export default App
