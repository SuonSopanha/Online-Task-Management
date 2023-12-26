import React, { useEffect, useState } from "react";
import { FaSortDown, FaTimesCircle, FaUserCircle } from "react-icons/fa";

const TaskAssignee = ({ Assignee,OnChange }) => {
  const [assigneeObj, setAssigneeObj] = useState(Assignee);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectAssignee = (selectedAssignee) => {
    setAssigneeObj(selectedAssignee);
    OnChange(selectedAssignee)
    setShowDropdown(false);
  };

  const handleRemoveAssignee = () => {
    setAssigneeObj(null);
    OnChange(null);

  };

  useEffect(() => {
    setAssigneeObj(Assignee);
  }, [Assignee]);



  const renderAssignee = () => {
    if (assigneeObj !== null) {
      return (
        <div className="relative">
          <button
            className="select-assignee flex flex-row space-x-2 rounded-lg px-2 hover:border hover:bg-gray-500 hover:border-black"
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <img
              className="w-6 h-6 rounded-full"
              src={
                "https://source.unsplash.com/ILip77SbmOE/900x900"
              }
              alt={assigneeObj.name}
            />
            <span>{assigneeObj.name}</span>
          </button>

        </div>
      );
    } else {
      return (
        <button
          className="select-assignee flex flex-row space-x-2 rounded-lg px-2 hover:border hover:bg-gray-500 hover:border-black"
          onClick={() => {
            setShowDropdown(!showDropdown);
            console.log("click", showDropdown);
          }}
        >
          <FaUserCircle className="w-6 h-6" />
          <span>Assignee</span>

          {showDropdown && (
            <div className="absolute mt-2 z-10 bg-white border border-gray-300 rounded-lg shadow-md">
              {/* Render dropdown options here */}
              {/* Example: */}
              <div
                className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                onClick={() =>
                  handleSelectAssignee({
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
                  handleSelectAssignee({
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
                  handleSelectAssignee({
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
        {renderAssignee()}
      </div>
      {assigneeObj !== null && (
        <button
          className="remove-assignee flex flex-row items-center text-sm sm:text-base font-normal leading-tight text-gray-700"
          onClick={handleRemoveAssignee}
        >
          <FaTimesCircle className="" />
        </button>
      )}
    </div>
  );
};

export default TaskAssignee;
