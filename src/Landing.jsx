import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-96 text-center">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Our Landing Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="dropdown" className="block text-gray-600">Select a device:</label>
            <select
              id="dropdown"
              name="dropdown"
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="mb-4">  
            <select
              id="dropdown"
              name="dropdown"
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="Option 1">Model 1</option>
              <option value="Option 2">Model 2</option>
              <option value="Option 3">Model 3</option>
            </select>
          </div>
          <div className="mb-4">
            <Link to="/chat">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;
