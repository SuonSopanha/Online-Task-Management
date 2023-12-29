import React from "react";
import { useState, useContext,useEffect } from "react";


import axios from "axios";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import TaskModal from "./taskModal";
import SendMessageModal from "./sendMessageModal";

import { modalContext } from "../part/test";

const TaskList = () => {

  const [taskList,setTaskList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { openModal, isModalOpen, setModalTask } = useContext(modalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'https://api.example.com/data' with your API endpoint
        const response = await axios.get('https://my.api.mockaroo.com/task_schema.json?key=1483cb70');
        setTaskList(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <p>Loading...</p>;
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
                  <th class="px-4 py-3 w-1/6">Status</th>
                  <th class="px-4 py-3 w-1/4">Due Date</th>
                </tr>
              </thead>
              <tbody class="">
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
                        <div class="relative w-4 h-4 mr-3 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        only Me
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
                    <td class="px-4 py-2 text-sm border">
                      {task.assignee_dates}
                    </td>
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
