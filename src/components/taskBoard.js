// TaskBoard.js
import React, { useState } from "react";

import { FaUser } from "react-icons/fa";

import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task 1",
      description: "Task 1 Description",
      priority: "High",
      status: "todo",
      dueDate: "2023-12-31",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Task 2 Description",
      priority: "Medium",
      status: "todo",
      dueDate: "2023-12-15",
    },
    {
      id: 3,
      name: "Task 3",
      description: "Task 3 Description",
      priority: "Low",
      status: "done",
      dueDate: "2023-12-10",
    },

    {
      id: 4,
      name: "Task 4",
      description: "Task 4 Description",
      priority: "Low",
      status: "done",
      dueDate: "2023-12-10",
    },

    {
      id: 5,
      name: "Task 5",
      description: "Task 5 Description",
      priority: "Low",
      status: "done",
      dueDate: "2023-12-10",
    },

    {
      id: 6,
      name: "Task 6",
      description: "Task 6 Description",
      priority: "Low",
      status: "done",
      dueDate: "2023-12-10",
    },

    {
      id: 7,
      name: "Task 7",
      description: "Task 7 Description",
      priority: "Low",
      status: "done",
      dueDate: "2023-12-10",
    },

    {
      id: 8,
      name: "Task 8",
      description: "Task 8 Description",
      priority: "Low",
      status: "Pending",
      dueDate: "2023-12-10",
    },
  ]);

  const moveTask = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-8">Task Board</h1>

      <div className="flex space-x-2">
        <div className="w-1/3 bg-glasses backdrop-blur-12 rounded-xl p-3">
          <h2 className="text-lg font-semibold mb-4">To Do</h2>
          <div className="flex flex-col space-y-2">
            {tasks
              .filter((task) => task.status === "todo")
              .map((task) => (
                <div class="flex justify-center items-center">
                  <div class="flex flex-col bg-blue-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
                    <div class="flex flex-row space-x-1 items-center">
                      <span>
                        <FaUser class="text-white text-xs" />
                      </span>

                      <span class="text-xs">Rizky Design Team</span>
                    </div>
                    <div>
                      <p class="text-xl font-bold mt-1 mb-2">
                        Cryptoku landing page
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
                        Acceptable
                      </span>
                      <span class="px-2 py-1 w-fit font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-lg text-sm">
                        OnTrack
                      </span>
                    </div>

                    <div className="text-xs pt-1 items-end flex justify-end">DueDate: {task.dueDate}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-1/3 bg-glasses backdrop-blur-12 rounded-xl p-3">
          <h2 className="text-lg font-semibold mb-4">Pending</h2>
          <div className="flex flex-col space-y-2">
            {tasks
              .filter((task) => task.status === "Pending")
              .map((task) => (
                <div class="flex justify-center items-center">
                  <div class="flex flex-col bg-blue-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
                    <div class="flex flex-row space-x-1 items-center">
                      <span>
                        <FaUser class="text-white text-xs" />
                      </span>

                      <span class="text-xs">Rizky Design Team</span>
                    </div>
                    <div>
                      <p class="text-xl font-bold mt-1 mb-2">
                        Cryptoku landing page
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
                        Acceptable
                      </span>
                      <span class="px-2 py-1 w-fit font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-lg text-sm">
                        OnTrack
                      </span>
                    </div>

                    <div className="text-xs pt-1 items-end flex justify-end">DueDate: {task.dueDate}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-1/3 bg-glasses backdrop-blur-12 rounded-xl p-3">
          <h2 className="text-lg font-semibold mb-4">Done</h2>
          <div className="flex flex-col space-y-2">
            {tasks
              .filter((task) => task.status === "done")
              .map((task) => (
                <div class="flex justify-center items-center">
                  <div class="flex flex-col bg-blue-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
                    <div class="flex flex-row space-x-1 items-center">
                      <span>
                        <FaUser class="text-white text-xs" />
                      </span>

                      <span class="text-xs">Rizky Design Team</span>
                    </div>
                    <div>
                      <p class="text-xl font-bold mt-1 mb-2">
                        Cryptoku landing page
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
                        Acceptable
                      </span>
                      <span class="px-2 py-1 w-fit font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-lg text-sm">
                        OnTrack
                      </span>
                    </div>

                    <div className="text-xs pt-1 items-end flex justify-end">DueDate: {task.dueDate}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
