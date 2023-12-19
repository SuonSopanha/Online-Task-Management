import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const DropdownButton = ({type,initState,handleChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Acceptable");


  const options = type === "status" ? ["On Track", "On Hold", "Complete", "Off Track"] : ["Low", "Medium", "High", "Very High"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center px-2 py-0.5 text-sm font-medium text-green-700 bg-green-100 border border-green-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaCheckCircle className="mr-2" />
        {selectedOption}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-lg shadow-lg bg-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
