import React, { useState, useEffect } from 'react';
import image1 from '../assets/imagedcs1.jpg';
import image2 from '../assets/imagedcs2.jpg';
import image3 from '../assets/imagedcs3.jpg';
import image4 from '../assets/imagedcs4.jpg';
import { Link } from 'react-router-dom';

const images = [image1, image2, image3, image4];

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fading in
      }, 1000); // Delay to sync fade out and fade in
    }, 15000); // Change image every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white min-h-screen flex flex-col">

      {/* Background Image with Zoom Effect and Search Functionality */}
      <div className="flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={images[currentImageIndex]}
            alt="Movie Background"
            className={`w-full h-full blur-sm object-cover transition-all duration-1000 ease-in-out transform ${
              fade ? 'opacity-100 scale-130' : 'opacity-0 scale-100'
            }`}
            style={{
              transition: 'opacity 3s ease-in-out, transform 15s ease-in-out',
            }}
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
