import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoviesSection = () => {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState({});
  const [category, setCategory] = useState('popular');
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = ['popular', 'top_rated', 'upcoming'];

  const apiKey = 'c93ea1cbeaa3f9989d5b33c879a12c82'; 

  useEffect(() => {
    fetchMovies();
    fetchFeaturedMovie();
  }, [category]);

  const fetchMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`);
    setMovies(response.data.results.slice(0, 6)); // Limit up to 6 movies
  };

  const fetchFeaturedMovie = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    setFeaturedMovie(response.data.results[0]); // Gets the first popular movie as featured
  };

  const fetchTrailer = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`);
    const trailer = response.data.results.find(video => video.type === 'Trailer');
    if (trailer) {
      setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTrailerUrl('');
  };

  const handleMoreInfo = (movieId) => {
    window.open(`https://www.themoviedb.org/movie/${movieId}`, '_blank');
  };

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Movies Section</h2>

      {/* Featured Movie Carousel */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Featured Movie</h3>
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
            alt={featuredMovie.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <h4 className="text-2xl font-bold">{featuredMovie.title}</h4>
              <p className="mt-2 text-[15px]">{featuredMovie.overview}</p>
              <button
                onClick={() => fetchTrailer(featuredMovie.id)}
                className="mt-4 px-4 py-2 bg-emerald-400 rounded hover:bg-orange-400 transition duration-300"
              >
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">Select Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="relative group">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <h4 className="text-lg font-bold">{movie.title}</h4>
                <p className="mt-2">Release Date: {movie.release_date}</p>
                <button
                  onClick={() => handleMoreInfo(movie.id)}
                  className="mt-4 px-3 py-1 bg-emerald-400 rounded hover:bg-orange-400 transition duration-300"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trailer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-800 rounded-lg p-4">
            <button onClick={handleModalClose} className="absolute top-2 right-2 text-white">
              &times;
            </button>
            <iframe
              width="560"
              height="315"
              src={trailerUrl.replace('watch?v=', 'embed/')}
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesSection;
