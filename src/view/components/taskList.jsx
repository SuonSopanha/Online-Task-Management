import React from "react";
import { useState, useContext, useEffect } from "react";

import axios from "axios";
import { FaCheckCircle, FaMinusCircle, FaUsers, FaUser } from "react-icons/fa";
import TaskModal from "./taskModal";
import SendMessageModal from "./sendMessageModal";

import { auth } from "../../firebase/config";

import {
  getRtTaskByUserID,
  getRtTaskByAssigneeID,
} from "../../firebase/taskCRUD";

import { getprojecByID } from "../../firebase/projectCRUD";
import LoadingBalls from "../../utils/loading";
import { sortByPriority,sortByDueDate,sortByStatus,sortByWorkHoursRequired,sortByTaskName,sortByID } from "../../utils/sortTask";
import { modalContext } from "../part/test";
import { mytaskContext } from "../pages/myTask";

import UserProfilePic from "../../utils/photoGenerator";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { openModal, isModalOpen, setModalTask } = useContext(modalContext);
  const {sortCriteria} = useContext(mytaskContext)

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



  let defaultTask = []

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, you can update the component state or perform other actions.
        console.log("User is signed in:", user);

        getRtTaskByUserID(auth.currentUser.uid, setTaskList);
        //getRtTaskByAssigneeID(auth.currentUser.uid, setTaskList)
        setLoading(false);
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
  },[isModalOpen] ); // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount

  let sortTask = []


  useEffect(() => {

    sortTask = [...sortTasks(taskList,sortCriteria)]
    setTaskList(sortTask)
  },[sortCriteria])

  const Team = "Team"

  if (loading) {
    return <LoadingBalls />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const priorityColor = (priority) => {
    if (priority === "High") {
      return "yellow";
    } else if (priority === "Medium") {
      return "green";
    } else if (priority === "Low") {
      return "blue";
    } else if (priority === "Very High") {
      return "red";
    }
  };



  console.log(taskList);

  return (
    <>
      <section class="container mx-auto px-6 pb-2 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 uppercase border-b bg- border-gray-600">
                  <th class="px-4 py-3">Task Name</th>
                  <th class="px-4 py-3 w-1/6">Visibility</th>
                  <th class="px-4 py-3 w-1/6">Priority</th>
                  <th class="px-4 py-3 w-1/4">Due Date</th>
                </tr>
              </thead>
              <tbody class="">
                {console.log(taskList)}
                {taskList.map((task) => (
                  <tr class="text-gray-700">
                    <td class="px-4 py-2 border">
                      <button
                        onClick={() => {
                          openModal();
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

                    <td class="px-4 py-2 text-ms font-semibold border">
                      <div class="flex items-center text-sm">
                        <div class="flex items- center relative w-4 h-4 mr-3 rounded-full md:block">
                          {task.project_id !== null ? <FaUsers /> : <FaUser />}
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        {task.project_id !== null ? (
                          <span className="text-x whitespace-nowrap">{task.project ? task.project.project_name : Team }</span>
                        ) : (
                          <span className="text-xs">Only Me</span>
                        )}
                      </div>
                    </td>
                    <td class="px-4 py-2 text-xs border">
                      <span
                        class={`px-2 py-1 whitespace-nowrap font-semibold leading-tight text-${priorityColor(
                          task.priority
                        )}-700 rounded-sm bg-${priorityColor(
                          task.priority
                        )}-100`}
                      >
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

export default TaskList;
