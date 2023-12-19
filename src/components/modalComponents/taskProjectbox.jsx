import React from "react";
import { useState } from "react";

const TaskProjectbox = ({ Project }) => {
  const [projectObj, setProjectObj] = useState(Project);
  const [isDropdown, setIsDropdwon] = useState(false);

  const handleSelectProject = (selectedProject) => {
    setIsDropdwon(false);
    setProjectObj(Project);
  };

  const handleRemoveProject = () => {
    setProjectObj(null);
  };

  const renderProject = () => {
    if (projectObj !== null) {
      return (
        <div className="flex flex-row items-center justify-between space-x-2">
          <img
            className="w-6 h-6 rounded-lg"
            src="https://source.unsplash.com/ILip77SbmOE/900x900"
          ></img>

          <span>Oliver Aguilerra</span>
        </div>
      );
    } else {
      return (
        <button className="flex flex-row items-center justify-between space-x-2">
          <img
            className="w-6 h-6 rounded-lg"
            src="https://source.unsplash.com/ILip77SbmOE/900x900"
          ></img>
          <span>No Project</span>
          {isDropdown && (
            <div className="absolute mt-2 z-10 bg-white border border-gray-300 rounded-lg shadow-md">
              {/* Render dropdown options here */}
              {/* Example: */}
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                onClick={() =>
                  handleSelectProject({
                    name: "John Doe",
                    imageUrl: "URL_TO_IMAGE",
                  })
                }
              >
                John Doe
              </div>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                onClick={() =>
                  handleSelectProject({
                    name: "John Doe",
                    imageUrl: "URL_TO_IMAGE",
                  })
                }
              >
                John Doe
              </div>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                onClick={() =>
                  handleSelectProject({
                    name: "John Doe",
                    imageUrl: "URL_TO_IMAGE",
                  })
                }
              >
                John Doe
              </div>
              {/* Add more options as needed */}
            </div>
          )}
        </button>
      );
    }
  };

  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center justify-between space-x-2">
        {renderProject()}
      </div>
      {projectObj !== null && (
        <button
          className="remove-assignee flex flex-row items-center text-sm sm:text-base font-normal leading-tight text-gray-700"
          onClick={handleRemoveProject}
        >
          <FaTimesCircle className="" />
        </button>
      )}
    </div>
  );
};

export default TaskProjectbox;
