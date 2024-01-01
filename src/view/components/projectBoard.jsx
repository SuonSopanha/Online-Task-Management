// TaskBoard.js
import React, { useState, useEffect, useContext } from "react";

import { FaUser } from "react-icons/fa";

import { auth } from "../../firebase/config";

import { getRtTaskByProjectID } from "../../firebase/taskCRUD";
import LoadingBalls from "../../utils/loading";

import { modalContext } from "../part/test";

const ProjectBoard = () => {
  const { tabID, setTabID, openModal, setModalTask } = useContext(modalContext);

  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, you can update the component state or perform other actions.
        console.log("User is signed in:", user);

        getRtTaskByProjectID(tabID, setTaskList);
        setLoading(false);
        console.log(taskList);
      } else {
        // User is signed out.
        setError(true);
        console.log("User is signed out");
      }
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, [tabID]); // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount

  if (loading) {
    return <LoadingBalls />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-8">Task Board</h1>

      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
        <div className="w-full lg:w-1/3 bg-glasses backdrop-blur-12 rounded-xl p-3">
          <h2 className="text-lg font-semibold mb-4">To Do</h2>
          <div className="flex flex-col space-y-2">
            {taskList
              .filter((task) => task.task_category === "To Do")
              .map((task) => (
                <button
                  key={task.id}
                  class="flex justify-center items-center"
                  onClick={() => {
                    setModalTask(task);
                    openModal();
                  }}
                >
                  <div class="flex flex-col bg-blue-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
                    <div class="flex flex-row space-x-1 items-center">
                      <span>
                        <FaUser class="text-white text-xs" />
                      </span>

                      <span class="text-xs">Rizky Design Team</span>
                    </div>
                    <div>
                      <p class="flex justify-start text-xl font-bold mt-1 mb-2">
                        {task.task_name}
                      </p>
                    </div>

                    <div class="mb-1 flex flex-row justify-start left-0">
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2 "
                      ></img>
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2 "
                      ></img>
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2"
                      ></img>
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2 "
                      ></img>
                    </div>
                    <div class="text-xs flex space-x-1">
                      <span class="px-2 py-1 w-fit font-semibold leading-tight text-green-700 bg-green-100 rounded-lg text-sm">
                        {task.priority}
                      </span>
                      <span class="px-2 py-1 w-fit font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-lg text-sm">
                        {task.status}
                      </span>
                    </div>

                    <div className="text-xs pt-1 items-end flex justify-end">
                      DueDate: {task.assignee_dates}
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-glasses backdrop-blur-12 rounded-xl p-3">
          <h2 className="text-lg font-semibold mb-4">To Do</h2>
          <div className="flex flex-col space-y-2">
            {taskList
              .filter((task) => task.task_category === "Working")
              .map((task) => (
                <button
                  key={task.id}
                  class="flex justify-center items-center"
                  onClick={() => {
                    setModalTask(task);
                    openModal();
                  }}
                >
                  <div class="flex flex-col bg-violet-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
                    <div class="flex flex-row space-x-1 items-center">
                      <span>
                        <FaUser class="text-white text-xs" />
                      </span>

                      <span class="text-xs">Rizky Design Team</span>
                    </div>
                    <div>
                      <p class="flex text-xl font-bold mt-1 mb-2 justify-start">
                        {task.task_name}
                      </p>
                    </div>

                    <div class="mb-1 flex flex-row justify-start left-0">
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2 "
                      ></img>
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2 "
                      ></img>
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2"
                      ></img>
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2 "
                      ></img>
                    </div>
                    <div class="text-xs flex space-x-1">
                      <span class="px-2 py-1 w-fit font-semibold leading-tight text-green-700 bg-green-100 rounded-lg text-sm">
                        {task.priority}
                      </span>
                      <span class="px-2 py-1 w-fit font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-lg text-sm">
                        {task.status}
                      </span>
                    </div>

                    <div className="text-xs pt-1 items-end flex justify-end">
                      DueDate: {task.assignee_dates}
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-glasses backdrop-blur-12 rounded-xl p-3">
          <h2 className="text-lg font-semibold mb-4">Done</h2>
          <div className="flex flex-col space-y-2">
            {taskList
              .filter((task) => task.task_category === "Done")
              .map((task) => (
                <button
                  key={task.id}
                  class="flex justify-center items-center"
                  onClick={() => {
                    setModalTask(task);
                    openModal();
                  }}
                >
                  <div class="flex flex-col bg-green-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
                    <div class="flex flex-row space-x-1 items-center">
                      <span>
                        <FaUser class="text-white text-xs" />
                      </span>

                      <span class="text-xs">Rizky Design Team</span>
                    </div>
                    <div>
                      <p class="flex justify-start text-xl font-bold mt-1 mb-2">
                        {task.task_name}
                      </p>
                    </div>

                    <div class="mb-1 flex flex-row justify-start left-0">
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2 "
                      ></img>
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2 "
                      ></img>
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2"
                      ></img>
                      <img
                        src="https://source.unsplash.com/ILip77SbmOE/900x900"
                        class="w-4 rounded-full border-2 "
                      ></img>
                    </div>
                    <div class="text-xs flex space-x-1">
                      <span class="px-2 py-1 w-fit font-semibold leading-tight text-green-700 bg-green-100 rounded-lg text-sm">
                        {task.priority}
                      </span>
                      <span class="px-2 py-1 w-fit font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-lg text-sm">
                        {task.status}
                      </span>
                    </div>

                    <div className="text-xs pt-1 items-end flex justify-end">
                      DueDate: {task.assignee_dates}
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
