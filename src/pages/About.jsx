import React from 'react'
import aboutImage from '../assets/X.png'; // Your image file
import team1 from '../assets/team1.png'; // Example team member images
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpeg';

const About = () => {
  return (
    <div className="text-gray-100 bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-800">
        <img
          src={aboutImage}
          alt="About XenStream"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mt-[50px]">About XenStream</h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <div className="lg:flex lg:items-center lg:space-x-12">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg mb-8 lg:mb-0 lg:w-1/2 object-cover h-72 w-full"
          />
          <div className="lg:w-1/2 text-left">
            <p className="text-lg leading-relaxed text-gray-300">
              At XenStream, we strive to provide the ultimate movie experience for all film lovers. Whether you're 
              looking to discover new releases, leave reviews, or watch trailers, our platform makes it easy for you 
              to engage with the world of cinema.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              Founded by a team of passionate movie enthusiasts, XenStream brings together a diverse community of 
              people who love sharing their thoughts on movies, from blockbusters to indie films. We're committed to 
              continually improving and expanding our features, so you can get the most out of your movie-watching 
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="p-8 bg-gray-900 text-white">

      <h3 className="text-2xl font-semibold mt-2">APIs Used</h3>
      <p className="mt-2 mb-4">
        We primarily use the TMDB (The Movie Database) API to fetch movie information. Below are the details of how we integrate this API into our project:
      </p>
      <div className="bg-gray-800 p-4 rounded-lg">
        <h4 className="text-xl font-bold mb-2">TMDB API</h4>
        <p className="mb-2">
          The TMDB API provides a rich database of movie-related information, including titles, release dates, trailers, and user ratings. We utilize this API for:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Fetching a list of popular, top-rated, and upcoming movies.</li>
          <li>Retrieving detailed information about each movie, including its overview and release date.</li>
          <li>Accessing trailer videos to enhance user engagement.</li>
        </ul>
        <p>
          To use the TMDB API, we make GET requests to the relevant endpoints using Axios, and we parse the returned JSON data to display it in our application. Each movie card includes buttons to watch trailers and view more information, making it easy for users to navigate and find what they're looking for.
        </p>
      </div>

    </div>
    </div>
  )
}

export default About