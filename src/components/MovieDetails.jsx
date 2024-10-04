import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { movieName } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6; // Number of reviews per page

  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY; 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
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

  // Load reviews from local storage on component mount
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(movieName)) || [];
    setReviews(storedReviews);
  }, [movieName]);

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      const newReviews = [...reviews, reviewText];
      setReviews(newReviews);
      setReviewText('');

      // Store updated reviews in local storage
      localStorage.setItem(movieName, JSON.stringify(newReviews));
    }
  };

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }
  if (error) {
    return <p className="text-center">{error}</p>;
  }
  if (!movieData) {
    return <p className="text-center">No movie data available</p>;
  }

  return (
    <div className="mt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <div className="flex flex-col lg:flex-row items-start lg:space-x-10 space-y-6 lg:space-y-0 container mx-auto bg-gray-800 rounded-lg shadow-lg p-4 md:p-8">
        {/* Movie Poster */}
        <div className="w-full lg:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
            className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        {/* Movie Details */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 border-b-2 border-yellow-500 pb-1">
            {movieData.title}
          </h2>
          <p className="text-sm md:text-lg mb-4 text-gray-300 leading-relaxed">
            {movieData.overview}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold mr-2"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
            )}
            {/* Ratings */}
            <div className="flex items-center space-x-4 col-span-2">
              <p className="text-sm md:text-lg">
                <strong>Ratings:</strong> {movieData.vote_average}/10 (TMDB)
              </p>
              <p className="text-sm md:text-lg">({movieData.vote_count} votes)</p>
            </div>
            {/* Production Companies */}
            {movieData.production_companies && movieData.production_companies.length > 0 && (
              <p className="col-span-2">
                <strong>Production Companies:</strong>{' '}
                {movieData.production_companies.map((company) => company.name).join(', ')}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Reviews</h3>
        
        {/* Review Form */}
        <form onSubmit={handleReviewSubmit} className="mb-4">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Leave a review..."
            className="w-full h-24 p-2 border border-gray-700 rounded-lg bg-gray-700 text-white resize-none"
            required
          />
          <button
            type="submit"
            className="mt-2 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg"
          >
            Submit Review
          </button>
        </form>

        {/* Reviews List */}
        <div className="space-y-4">
          {currentReviews.map((review, index) => (
            <div key={index} className="p-4 bg-gray-700 rounded-lg">
              <p>{review}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 py-1 px-3 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'} text-white`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
