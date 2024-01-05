import React from "react";

import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";

import { auth } from "../../firebase/config";

import { getRtTaskByProjectID } from "../../firebase/taskCRUD";
import LoadingBalls from "../../utils/loading";
import UserProfilePic from "../../utils/photoGenerator";
import { sortByPriority,sortByDueDate,sortByStatus,sortByWorkHoursRequired,sortByTaskName,sortByID } from "../../utils/sortTask";


import { modalContext } from "../part/test";
import { projectTaskContext } from "../pages/project";

const ProjectList = () => {
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
  }, [tabID,openProjectModal]); // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount

  let sortTask = []


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

  return (
    <>
      {console.log(tabID)}
      <section class="container mx-auto px-6 pb-2 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 uppercase border-b border-gray-600">
                  <th class="px-4 py-3">Task Name</th>
                  <th class="px-4 py-3 w-1/4">Assignee</th>
                  <th class="px-4 py-3 w-1/12">Status</th>
                  <th class="px-4 py-3 w-1/12">Priority</th>
                  <th class="px-4 py-3 w-1/6">Due Date</th>
                </tr>
              </thead>
              <tbody class="">
                {taskList.map((task) => (
                  <tr class="text-gray-700">
                    <td class="px-4 py-2 border">
                      <button
                        onClick={() => {
                          openProjectModal();
                          setModalTask(task);
                        }}
                      >
                        <div class="flex justify-center items-center text-sm">
                          {task.complete ? (
                            <FaCheckCircle className="text-emerald-500 mr-2" />
                          ) : (
                            <FaMinusCircle className=" text-violet-600 mr-2" />
                          )}

                          <div className="flex flex-col justify-center items-center">
                            <p class="font-semibold text-black whitespace-nowrap">
                              {task.task_name}
                            </p>
                          </div>
                        </div>
                      </button>
                    </td>
                    <td className="px-4 py-2 text-ms font-semibold border">
                      <div className="flex items-center text-sm">
                        <div className="flex flex-row items-center space-x-2 justify-center">
                          <div className="flex flex-row items-center justify-center w-6 h-6 rounded-full md:block">
                            {task.assignee.photoURL != null ? (
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={task.assignee.photoURL}
                                alt=""
                                loading="lazy"
                              />
                            ) : (
                              <UserProfilePic
                                className="w-2 h-2 items-center"
                                name={task.assignee.full_name}
                                size={6}
                              />
                            )}
                          </div>
                          <div className="ml-2">
                            <span>{task.assignee.full_name}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td class="px-4 py-2 text-xs border">
                      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {task.status}
                      </span>
                    </td>
                    <td class="px-4 py-2 text-xs border">
                      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {task.priority}
                      </span>
                    </td>
                    <td class="px-4 py-2 text-sm border">{task.due_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectList;
