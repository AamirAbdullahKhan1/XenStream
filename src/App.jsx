import { useState } from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import NewsSection from './pages/NewsSection'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar/>
        <Landing/>
        <NewsSection/>
      </>
    ),
  },

  {
    path: '/about',
    element: (
      <>
        <Navbar/>
        <About/>
      </>
    ),
  },

  {
    path: '/movies',
    element: (
      <>
        <Navbar/>
        <Movies/>
        
      </>
    ),
  },
])

function App() {
    return <RouterProvider router={router} />;

}

export default App
