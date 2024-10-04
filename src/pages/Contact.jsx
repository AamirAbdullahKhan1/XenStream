import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Form submitted successfully!!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex mt-[50px] justify-center items-center min-h-screen bg-gray-900 px-4 md:px-0">
      <div className="bg-gray-800 p-8 md:p-8 lg:p-12 rounded-lg shadow-lg w-full max-w-lg mt-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your message"
              rows="5"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
