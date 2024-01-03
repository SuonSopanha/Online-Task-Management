import React, { useEffect, useState } from 'react';

const Dropdown = ({ parent,children,OnChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    OnChange(option);
    setIsOpen(false);
  };

  useEffect(() =>{
    if(selectedOption == null || selectedOption === "Default"){
      OnChange(selectedOption)
    }
  },[isOpen])


  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-500 bg-opacity-70 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {selectedOption == null || selectedOption === "Default" ? parent : selectedOption}
          <svg
            className="-mr-1 h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {children.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="text-gray-700 block w-full px-3 py-1 text-left text-sm border-b bg-white hover:text-blue-500"
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

export default Dropdown;
