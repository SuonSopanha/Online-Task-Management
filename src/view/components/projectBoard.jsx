// TaskBoard.js
import React, { useState, useEffect, useContext } from "react";

import { FaUser,FaUsers } from "react-icons/fa";

import { auth } from "../../firebase/config";

import { getRtTaskByProjectID } from "../../firebase/taskCRUD";
import { getUserFullNameById } from "../../firebase/usersCRUD";
import LoadingBalls from "../../utils/loading";


import { sortByPriority,sortByDueDate,sortByStatus,sortByWorkHoursRequired,sortByTaskName,sortByID } from "../../utils/sortTask";


import { modalContext } from "../part/test";
import { projectTaskContext } from "../pages/project";

const ProjectBoard = () => {
  const { tabID, setTabID, openProjectModal, setModalTask } = useContext(modalContext);

  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {sortCriteria } = useContext(projectTaskContext) 


  const sortTasks = (tasks, criteria) => {
    switch (criteria) {
      case "Due_Date":
        console.log("Due_Date sort");
        return sortByDueDate(tasks);
      case "Priority":
        console.log("Priority sort");
        return sortByPriority(tasks);
      case "Status":
        console.log("Status sort");
        return sortByStatus(tasks);
      case "Name":
        console.log("naem sort")
        return sortByTaskName(tasks);
      // Add more cases for other criteria as needed
      default:
        return sortByID(tasks) ;
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in:", user);
  
        getRtTaskByProjectID(tabID, async (tasks) => {
          // Fetch additional data for each task
          const tasksWithFullNames = await Promise.all(
            tasks.map(async (task) => {
              // Fetch user's full name based on assignee_id
              const fullName = await getUserFullNameById(task.assignee_id);
              return {
                ...task,
                assignee_full_name: fullName,
              };
            })
          );
  
          // Set the modified taskList with assignee_full_name
          setTaskList(tasksWithFullNames);
          setLoading(false);
        });
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
  }, [tabID]);// Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount

  let sortTask = [];

  useEffect(() => {

    sortTask = [...sortTasks(taskList,sortCriteria)]
    setTaskList(sortTask)
  },[sortCriteria])

  if (loading) {
    return <LoadingBalls />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const Team = "Team"

  return (
    <div className="container mx-auto mt-10"> 
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
                    openProjectModal();
                  }}
                >
                  <div class="flex flex-col bg-blue-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
                    <div class="flex flex-row space-x-1 items-center">
                      <span>
                        {task.project_id !== null ? (
                          <FaUsers class="text-white text-xs" />
                        ) : (
                          <FaUser class="text-white text-xs" />
                        )}
                      </span>

                      {task.project_id !== null ? (
                        <span class="text-xs">
                          {task.project ? task.project.project_name : Team}
                        </span>
                      ) : (
                        <span class="text-xs">Only Me</span>
                      )}
                    </div>
                    <div>
                      <p class="flex justify-start text-xl font-bold mt-1 mb-2">
                        {task.task_name}
                      </p>
                    </div>

                    <div className="mb-1 flex flex-row justify-start left-0">
                      <div className="mb-1 flex flex-row justify-start left-0">
                      </div>
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
                      DueDate: {task.due_date}
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
                    openProjectModal();
                  }}
                >
                  <div class="flex flex-col bg-violet-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
                    <div class="flex flex-row space-x-1 items-center">
                      <span>
                        {task.project_id !== null ? (
                          <FaUsers class="text-white text-xs" />
                        ) : (
                          <FaUser class="text-white text-xs" />
                        )}
                      </span>

                      {task.project_id !== null ? (
                        <span class="text-xs">
                          {task.project ? task.project.project_name : Team}
                        </span>
                      ) : (
                        <span class="text-xs">Only Me</span>
                      )}
                    </div>
                    <div>
                      <p class="flex text-xl font-bold mt-1 mb-2 justify-start">
                        {task.task_name}
                      </p>
                    </div>

                    <div class="mb-1 flex flex-row justify-start left-0">
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
                      DueDate: {task.due_date}
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
                    openProjectModal();
                  }}
                >
                  <div class="flex flex-col bg-green-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
                    <div class="flex flex-row space-x-1 items-center">
                      <span>
                        {task.project_id !== null ? (
                          <FaUsers class="text-white text-xs" />
                        ) : (
                          <FaUser class="text-white text-xs" />
                        )}
                      </span>

                      {task.project_id !== null ? (
                        <span class="text-xs">
                          {task.project ? task.project.project_name : Team}
                        </span>
                      ) : (
                        <span class="text-xs">Only Me</span>
                      )}
                    </div>
                    <div>
                      <p class="flex justify-start text-xl font-bold mt-1 mb-2">
                        {task.task_name}
                      </p>
                    </div>

                    <div class="mb-1 flex flex-row justify-start left-0">
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
                      DueDate: {task.due_date}
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
