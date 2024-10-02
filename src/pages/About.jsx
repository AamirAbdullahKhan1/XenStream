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
          <h1 className="text-5xl font-bold mb-4">About XenStream</h1>
          <p className="text-lg text-gray-300">Discover the story behind our platform and meet the team.</p>
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
      <section className="bg-gray-800 py-16 px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src={team1}
              alt="Team Member 1"
              className="mx-auto w-36 h-36 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-400">Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src={team2}
              alt="Team Member 2"
              className="mx-auto w-36 h-36 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-400">CTO</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src={team3}
              alt="Team Member 3"
              className="mx-auto w-36 h-36 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Alice Johnson</h3>
            <p className="text-gray-400">Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About