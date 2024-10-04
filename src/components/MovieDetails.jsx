import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { movieName } = useParams(); // Get the movie name from the URL
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const TMDB_API_KEY = 'c93ea1cbeaa3f9989d5b33c879a12c82'; // Replace with your actual TMDB API key

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        // Search for the movie by name to get the movie ID
        const searchResponse = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: TMDB_API_KEY,
              query: movieName,
            },
          }
        );

        if (searchResponse.data.results.length > 0) {
          const movieId = searchResponse.data.results[0].id;
          // Fetch detailed information about the movie using the movie ID
          const movieDetailsResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
              params: {
                api_key: TMDB_API_KEY,
              },
            }
          );
          setMovieData(movieDetailsResponse.data);
        } else {
          setError('Movie not found');
        }
      } catch (err) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieName, TMDB_API_KEY]);

  if (loading) {
    return <p className='text-black'>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movieData) {
    return <p>No movie data available</p>;
  }

  return (
    <div className="min-h-screen mt-[80px] bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="flex flex-col lg:flex-row items-start lg:space-x-10 space-y-6 lg:space-y-0 container mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Movie Poster */}
        <div className="w-full lg:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
            className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500"
          />
        </div>

        {/* Movie Details */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-bold mb-4 border-b-2 border-yellow-500 pb-3">
            {movieData.title}
          </h2>

          <p className="text-lg mb-4 text-gray-300 leading-relaxed">
            {movieData.overview}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <p className="mb-2">
              <strong>Release Date:</strong> {movieData.release_date}
            </p>
            {movieData.runtime && (
              <p className="mb-2">
                <strong>Runtime:</strong> {movieData.runtime} minutes
              </p>
            )}

            {/* Genres */}
            {movieData.genres && movieData.genres.length > 0 && (
              <p className="mb-2 col-span-2">
                <strong>Genres:</strong>{' '}
                {movieData.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-sm font-semibold mr-2"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
            )}

            {/* Ratings */}
            <div className="flex items-center space-x-4 col-span-2">
              <p className="text-lg">
                <strong>Ratings:</strong> {movieData.vote_average}/10 (TMDB)
              </p>
              <p className="text-lg">({movieData.vote_count} votes)</p>
            </div>

            {/* Production Companies */}
            {movieData.production_companies &&
              movieData.production_companies.length > 0 && (
                <p className="col-span-2">
                  <strong>Production Companies:</strong>{' '}
                  {movieData.production_companies
                    .map((company) => company.name)
                    .join(', ')}
                </p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
