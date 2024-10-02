import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md p-4 px-6 py-6 z-20 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-[22px] font-bold cursor-pointer text-white">XenStream</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium text-white">Home</a></li>
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium text-white">About</a></li>
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium text-white">Movies</a></li>
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium text-white">Contact</a></li>
        </ul>

        {/* Hamburger Menu Icon (for mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 bg-gray-800 mt-4 p-4 text-white">
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium"><Link to='/'>Home</Link></a></li>
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium"><Link to='/about'>About</Link></a></li>
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">Movies</a></li>
          <li><a href="#" className="hover:text-lime-400 duration-300 font-medium">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
