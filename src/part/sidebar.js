import React from "react";
import { useState } from "react";

function Sidebar({ isOpen }) {
  const [isOpendrop, setIsOpendrop] = useState(false);

  const toggleDropdown = () => {
    setIsOpendrop(!isOpendrop);
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 w-28 sm:w-64 h-screen bg-glasses backdrop-blur-12 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 10, marginTop: "42px" }}
      >
        <div class="flex flex-col items-start w-full h-full overflow-hidden text-blue-500 rounded">
          <div class="flex flex-col items-center w-full mt-3  border-gray-300">
            <a
              class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
              
            >
              <svg
                class="w-3 h-3 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-700">Home</span>
            </a>

            <a
              class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
              
            >
              <svg
                class="w-3 h-3 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-700">MyTask</span>
            </a>

            <a
              class="flex items-center w-full h-8 px-3 mt-1 bg-gray-300 rounded"
              
            >
              <svg
                class="w-3 h-3 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-700">Inbox</span>
            </a>


          </div>
          <div class="flex flex-col items-center w-full mt-1 border-t border-gray-300">
            <a
              class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
              
            >
              <svg
                class="w-3 h-3 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-700">Products</span>
            </a>
            <a
              class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
              
            >
              <svg
                class="w-3 h-3 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-700">Settings</span>
            </a>
            <a
              class="relative flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
              
            >
              <svg
                class="w-3 h-3 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-700">Messages</span>
              <span class="absolute top-0 left-0 w-2 h-2 mt-1 ml-2 bg-indigo-500 rounded-full"></span>
            </a>
            <button
              className="flex justify-between items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300 focus:outline-none"
              onClick={toggleDropdown}
            >
              <div className="flex items-center">
                <svg
                  class="w-3 h-3 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700">Products</span>
              </div>
              <svg
                className={`w-3 h-3 stroke-current ${
                  isOpendrop ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>{" "}
            </button>
            {isOpendrop && (
              <div className="flex flex-col items-center w-full">
                {/* Dropdown content */}
                <a
                  className="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
                  
                >
                  {/* ...dropdown item icon... */}
                  <span className="ml-2 text-sm font-medium text-gray-700">Product 1</span>
                </a>
                <a
                  className="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
                  
                >
                  {/* ...dropdown item icon... */}
                  <span className="ml-2 text-sm font-medium text-gray-700">Product 2</span>
                </a>
                {/* Add more dropdown items as needed */}
              </div>
            )}
          </div>
          <a
            class="flex items-center justify-center w-full h-16 mt-auto mb-10 bg-gray-200 hover:bg-gray-300"
            
          >
            <svg
              class="w-3 h-3 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="ml-2 text-sm font-medium text-gray-700">Account</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
