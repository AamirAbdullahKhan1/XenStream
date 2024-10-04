import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'c93ea1cbeaa3f9989d5b33c879a12c82'; 
  const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(apiURL);
        setMovies(response.data.results.slice(0, 6)); // Fetches only the first 6 movies
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [apiURL]);

  if (loading) {
    return <div className="text-center py-10 text-gray-300">Loading popular movies...</div>;
  }

  return (
    <div className="relative py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Popular Movies</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <a
            href={`https://www.themoviedb.org/movie/${movie.id}`} 
            key={movie.id}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300 z-10" />
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="relative z-20 p-6">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-lime-400 transition-colors duration-300">
                {movie.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                {movie.overview || 'No description available.'}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
