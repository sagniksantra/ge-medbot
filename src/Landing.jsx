import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const Landing = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [selectedModel, setSelectedModel] = useState("Option 1");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    // Reset selected option when the model changes
    setSelectedOption("Option 1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getProductOptions = () => {
    switch (selectedModel) {
      case "Option 1":
        return ["UL Vivid S6", "UL Vivid S60", "UL Vivid S5"];
      case "Option 2":
        return ["ARC Module", "ARC Oxygen Monitor", "ARC Siare TS"];
      case "Option 3":
        return ["NM 3 Head GP", "NM 570C", "NM Camera"];
      default:
        return [];
    }
  };

  return (
    <>
    <Navbar />
    
    <div className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-96 text-center">
        <h1 className="text-3xl font-semibold">
          Welcome to 
        </h1>
        <h1 className="text-2xl font-semibold mb-4">
          GE-medbot 
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="modalDropdown" className="block text-gray-600">
              Select a Modal:
            </label>
            <select
              id="modalDropdown"
              name="modalDropdown"
              value={selectedModel}
              onChange={handleModelChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="Option 1">Ultrasound</option>
              <option value="Option 2">Respiratory</option>
              <option value="Option 3">Nuclear Medicine</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="productDropdown" className="block text-gray-600">
              Select a Product:
            </label>
            <select
              id="productDropdown"
              name="productDropdown"
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
              {getProductOptions().map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
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
    </>
  );
};

export default Landing;
