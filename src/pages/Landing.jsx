import React, { useState, useEffect } from 'react';
import image1 from '../assets/imagedcs1.jpg';
import image2 from '../assets/imagedcs2.jpg';
import image3 from '../assets/imagedcs3.jpg';
import image4 from '../assets/imagedcs4.jpg';

const images = [image1, image2, image3, image4];

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); // Change image every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-md p-4 px-6 py-6 z-20 flex justify-between items-center">
        <h1 className="text-[22px] font-bold cursor-pointer">XenStream</h1>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {/* Regular Navbar for Larger Screens */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">Home</a></li>
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">About</a></li>
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">Movies</a></li>
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">Contact</a></li>
        </ul>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 z-30 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '66.66%' }} // 2/3 of the screen width
      >
        <div className="p-4">
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Sidebar Links */}
          <ul className="mt-8 space-y-4">
            <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">Home</a></li>
            <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">About</a></li>
            <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">Movies</a></li>
            <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Overlay when Sidebar is Open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setMenuOpen(false)} // Clicking on the overlay closes the menu
        />
      )}

      {/* Background Image with Zoom Effect and Search Functionality */}
      <div className="flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={images[currentImageIndex]}
            alt="Movie Background"
            className="w-full blur-sm h-full object-cover transition-transform duration-[15s] ease-in-out transform scale-100"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to XenStream</h1>
          <p className="text-lg mb-8">Discover movies, leave reviews, and watch trailers all in one place.</p>

          <div className="w-full px-6 sm:w-[60%] lg:w-[100%] flex flex-col sm:flex-row items-center sm:space-x-4 mb-8">
            <input
              type="text"
              className="w-full sm:flex-1 p-4 bg-gray-800 text-gray-100 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-4 sm:mb-0"
              placeholder="Search for a movie..."
            />
            <button className="w-[30%] sm:w-auto px-5 py-3 bg-emerald-400 rounded-lg hover:bg-orange-400 text-black text-[17px] font-medium transition-colors duration-300">
              Search
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Landing;
