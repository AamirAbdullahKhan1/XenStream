import { useState } from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import NewsSection from './pages/NewsSection'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Landing/>
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
])

function App() {
    return <RouterProvider router={router} />;

}

export default App
