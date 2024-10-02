import React from 'react';

const newsData = [
  {
    title: 'New Blockbuster Movie Release',
    description: 'The much-awaited blockbuster has finally hit theaters! Fans are excited.',
    image: 'https://source.unsplash.com/featured/?cinema', // Placeholder image
    link: '#',
  },
  {
    title: 'Director Reveals Behind-the-Scenes Secrets',
    description: 'A behind-the-scenes look at how the movie was made, revealed by the director.',
    image: 'https://source.unsplash.com/featured/?movie', // Placeholder image
    link: '#',
  },
  {
    title: 'Upcoming Movie Trailer Release',
    description: 'Catch the trailer of the upcoming highly anticipated movie, now available online!',
    image: 'https://source.unsplash.com/featured/?trailer', // Placeholder image
    link: '#',
  },
];

const NewsSection = () => {
  return (
    <div className="relative py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Latest Movie News</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news, index) => (
          <a
            href={news.link}
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300 z-10" />
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="relative z-20 p-6">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-lime-400 transition-colors duration-300">{news.title}</h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{news.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
