import React from "react";

import { FaCheckCircle , FaMinusCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";

import { auth } from "../../firebase/config";

import { getRtTaskByProjectID } from "../../firebase/taskCRUD";
import LoadingBalls from "../../utils/loading";

import { modalContext } from "../part/test";

const ProjectList = () => {
  const { tabID, setTabID,openModal,setModalTask } = useContext(modalContext);

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
                        <div class="flex">
                          <div class="relative w-4 h-4 rounded-full md:block">
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
                        </div>

                        <div class="ml-2">
                          <span>Panha</span>
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
