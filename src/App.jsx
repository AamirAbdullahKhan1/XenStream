import Landing from './pages/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import NewsSection from './pages/NewsSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails'; 
import MoviesSection from './pages/Movies';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Landing />
        <NewsSection />
        <Footer />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: '/movies',
    element: (
      <>
        <Navbar />
        <MoviesSection/>
        <Footer />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <Contact/>
        <Footer />
      </>
    ),
  },
  {
    path: '/movies/:movieName', 
    element: (
      <>
        <Navbar />
        <MovieDetails /> 
        <Footer/>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
