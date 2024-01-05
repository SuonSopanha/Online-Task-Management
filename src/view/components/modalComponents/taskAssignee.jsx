import React, { useEffect, useState,useContext } from "react";
import { FaSortDown, FaTimesCircle, FaUserCircle } from "react-icons/fa";

import { getprojecByID } from "../../../firebase/projectCRUD";
import { getUserByID } from "../../../firebase/usersCRUD";
import { modalContext } from "../../part/test";

const TaskAssignee = ({ Assignee,Option ,OnChange }) => {
  const {tabID} = useContext(modalContext);
  const [assigneeObj, setAssigneeObj] = useState(Assignee);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchAssignee, setSearchAssignee] = useState();
  const handleSelectAssignee = (selectedAssignee) => {
    setAssigneeObj(selectedAssignee);
    OnChange(selectedAssignee.assignee_id)
    setShowDropdown(false);
  };

  const handleRemoveAssignee = () => {
    setAssigneeObj(null);
    OnChange(null);

  };

  useEffect(() =>{
    OnChange(assigneeObj)
  },[assigneeObj])

  useEffect(() => {
    setAssigneeObj(Assignee);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
          const project = await getprojecByID(tabID);
          const memberIdList = project.members.map((member) => member.id);
          console.log(memberIdList);
          // Fetch user information for each member ID
          const users = await Promise.all(
            memberIdList.map(async (memberId) => {
              // Assuming you have a function to get user information by ID
              const user = await getUserByID(memberId);
              return {...user,id:memberId};
            })
          );

          // Only set the state if the component is still mounted
          setSearchAssignee(users);
        
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            <FaUserCircle className="w-6 h-6"/>
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
              {console.log(searchAssignee)}
              {searchAssignee.map((assignee) => (
                <div
                  className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    handleSelectAssignee({
                      assignee_id: assignee.id,
                      photo_url: assignee.photo_url,
                      name: assignee.full_name,
                    
                    })
                  }
                >
                  {assignee.full_name}
                </div>
              ))}

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
