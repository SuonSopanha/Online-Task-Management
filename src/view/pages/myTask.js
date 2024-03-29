import React from "react";
import { useState, useEffect, useContext, createContext } from "react";

import { FaPlus } from "react-icons/fa";

import TaskList from "../components/taskList";
import TaskCalender from "../components/taskCalender";
import TaskBoard from "../components/taskBoard";
import Dropdown from "../components/dropDown";
import HomeTab from "../components/homeTab";
import { formattedDate } from "../../utils/formatDate";
import { auth } from "../../firebase/config";
import { getUserByID } from "../../firebase/usersCRUD";

import { modalContext } from "../part/test";
import UserProfilePic from "../../utils/photoGenerator";
export const mytaskContext = createContext(null);

const MyTask = () => {
  const [activeTab, setActiveTab] = useState("List");
  const [user, setUser] = useState({});
  const { setModalTask, openCreateModal } = useContext(modalContext);
  const [sortCriteria, setSortCriteria] = useState("Defualt");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = await getUserByID(auth.currentUser.uid);
        setUser(userData);
      } else {
        // User is signed out.
        console.log("User is signed out");
      }
    });

    // No need to return an unsubscribe function, as onAuthStateChanged directly returns it

    // Cleanup logic (optional): Unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const onSortChange = (sort) => {
    setSortCriteria(sort);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const taskSample = {
    project_id: "",
    user_id: "",
    task_name: "Name",
    description: "",
    due_date: "01/01/2023",
    task_category: "To Do",
    tracking: [],
    work_hour_required: 0,
    status: "On Track",
    priority: "Low",
    assignee_id: "",
    assignee_dates: undefined,
    complete: false,
    complete_date: "",
  };

  return (
    <div className="w-full h-fit bg-glasses backdrop-blur-12 rounded-lg">
      {/* Header */}
      <div className="flex flex-row justify-start border-b border-gray-500  ">
        <div className="flex items-center p-3 ml-1">
          <div class="relative w-12 h-12 rounded-full md:block">
            {user.photoURL === null ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-full">
                <UserProfilePic name={user.full_name} size={8}></UserProfilePic>
              </div>
            ) : (
              // You can replace this with the desired content for true condition
              <div className="flex h-10 w-10 items-center justify-center rounded-full">
                <img
                  src={user.photoURL}
                  alt="plus-math"
                  className="rounded-full"
                />
              </div>
            )}
          </div>
        </div>
        <div className="text-sm font-medium text-gray-500 flex flex-col justify-between">
          <h1 className="text-lg font-semibold text-gray-500 pt-3 pb-1 px-1">
            My Task
          </h1>
          <div>
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:bg-blue-300 hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300 ${
                    activeTab === "List" ? "text-blue-600 border-blue-600" : ""
                  }`}
                  onClick={() => handleTabClick("List")}
                >
                  List
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3  py-2 border-b-2 border-transparent rounded-t-lg hover:bg-blue-300 hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300 ${
                    activeTab === "Calender"
                      ? "text-blue-600 border-blue-600"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Calender")}
                  aria-current={activeTab === "Calender"}
                >
                  Calendar
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:bg-blue-300 hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300 ${
                    activeTab === "Board" ? "text-blue-600 border-blue-600" : ""
                  }`}
                  onClick={() => handleTabClick("Board")}
                >
                  Board
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Body content */}
      <div>
        <div className="flex items-center justify-between m-4">
          <div className="flex items-center space-x-2">
            <Dropdown
              parent={"Sort"}
              children={["Name", "Due_Date", "Priority", "Status", "Default"]}
              OnChange={onSortChange}
            />
          </div>

          {/* <div className="flex space-x-2">
            <button
              onClick={() => {
                openCreateModal();
                setModalTask(taskSample);
              }}
              type="button"
              className="px-2 py-2 gap-x-1 md:px-3 md:py-2 md:mr-3 md:gap-x-1.5 rounded-md text-white bg-blue-500 bg-opacity-80  hover:bg-blue-600 flex items-center text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
            >
              <FaPlus className="w-3 h-3" />
              <div className="ml-1 text-sm">Add Milestone</div>
            </button>
            <button
              onClick={() => {
                openCreateModal();
                setModalTask(taskSample);
              }}
              type="button"
              className="px-2 py-2 gap-x-1 md:px-3 md:py-2 md:mr-3 md:gap-x-1.5 rounded-md text-white bg-blue-500 bg-opacity-80  hover:bg-blue-600 flex items-center text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
            >
              <FaPlus className="w-3 h-3" />
              <div className="ml-1 text-sm">Add task</div>
            </button>
          </div> */}

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <button
              onClick={() => {
                openCreateModal();
                setModalTask(taskSample);
              }}
              type="button"
              className="px-2 py-2 gap-x-1 md:px-3 md:py-2 md:gap-x-1.5 rounded-md text-white bg-blue-500 bg-opacity-80 hover:bg-blue-600 flex items-center text-sm font-semibold md:text-base shadow-sm ring-1 ring-inset ring-gray-300"
            >
              <FaPlus className="w-3 h-3 md:w-4 md:h-4" />{" "}
              {/* Adjust icon size */}
              <div className="ml-1 md:ml-2">Add Milestone</div>{" "}
              {/* Adjust margin */}
            </button>
            <button
              onClick={() => {
                openCreateModal();
                setModalTask(taskSample);
              }}
              type="button"
              className="px-2 py-2 gap-x-1 md:px-3 md:py-2 md:gap-x-1.5 rounded-md text-white bg-blue-500 bg-opacity-80 hover:bg-blue-600 flex items-center text-sm font-semibold md:text-base shadow-sm ring-1 ring-inset ring-gray-300"
            >
              <FaPlus className="w-3 h-3 md:w-4 md:h-4" />{" "}
              {/* Adjust icon size */}
              <div className="ml-1 md:ml-2">Add Task</div> {/* Adjust margin */}
            </button>
          </div>
        </div>

        <mytaskContext.Provider value={{ sortCriteria }}>
          {activeTab === "List" && <TaskList />}
          {activeTab === "Calender" && <TaskCalender />}
          {activeTab === "Board" && <TaskBoard />}
        </mytaskContext.Provider>
      </div>
    </div>
  );
};

export default MyTask;
