import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/imagedcs1.jpg';
import image2 from '../assets/imagedcs2.jpg';
import image3 from '../assets/imagedcs3.jpg';
import image4 from '../assets/imagedcs4.jpg';

const images = [image1, image2, image3, image4];

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Starts the fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Starts fading in
      }, 1000); 
    }, 15000); // The interval of the image switch (which is 15secs)

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchTerm.trim()) {
      navigate(`/movies/${encodeURIComponent(searchTerm.trim())}`); 
    }
  };

  return (
    <div className="relative text-white min-h-screen flex flex-col">
      {/* Background Image with Zoom Effect and Search Functionality (still not working) */}
      <div className="flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={images[currentImageIndex]}
            alt="Movie Background"
            className={`w-full h-full object-cover blur-sm transition-all duration-[15s] ease-in-out transform ${
              fade ? 'opacity-100 scale-130' : 'opacity-0'
            }`}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to XenStream</h1>
          <p className="text-lg mb-8">Discover movies, leave reviews, and watch trailers all in one place.</p>

          <form onSubmit={handleSearch} className="w-full px-6 sm:w-[60%] lg:w-[100%] flex flex-col sm:flex-row items-center sm:space-x-4 mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Updates the search query
              className="w-full sm:flex-1 p-4 bg-gray-800 text-gray-100 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-4 sm:mb-0"
              placeholder="Search for a movie..."
            />
            <button type="submit" className="w-[30%] sm:w-auto px-5 py-3 bg-emerald-400 rounded-lg hover:bg-orange-400 text-black text-[17px] font-medium transition-colors duration-300">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
