import { useState } from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, createBrowserRouter, Link } from 'react-router-dom'
import About from './pages/About'
import NewsSection from './pages/NewsSection'

function App() {
  
  return (
    <>
      <Landing/>
      <NewsSection/>

    </>
  )
}

export default App
