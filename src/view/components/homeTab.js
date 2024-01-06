import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import env from "dotenv/config"

import { auth } from "../../firebase/config";
import { formattedDate } from "../../utils/formatDate";
import { getAllTaskByID } from "../../firebase/taskCRUD";
import { getRtProjectByMemberID,getRtProjectByOwnerID } from "../../firebase/projectCRUD";
import { addAllMessages } from "../../firebase/messageCRUD";
import { addAllNotification } from "../../firebase/notification";
import { addAllTeam } from "../../firebase/teamCRUD";
import { getUserByID } from "../../firebase/usersCRUD";
import TaskList from "./taskList";
import MyTask from "../pages/myTask";

import { FaCheckCircle, FaMinusCircle, FaUser, FaUsers } from "react-icons/fa";

import LoadingBalls from "../../utils/loading";
import UserProfilePic from "../../utils/photoGenerator";

import { modalContext } from "../part/test";

const HomeTab = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const [projectList,setProjectList] = useState([]);

  const { openModal, isModalOpen, setModalTask,setTab } = useContext(modalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = await getUserByID(auth.currentUser.uid);
        setUser(userData);
        console.log("User is signed in:", userData);
        
        getRtProjectByMemberID(auth.currentUser.uid, setProjectList);
        const tasks = await getAllTaskByID(auth.currentUser.uid);
        setTaskList(tasks);
        setLoading(false);
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
  }, []); // Empty dependency array to run the effect only once on component mount

  if (loading) {
    return <LoadingBalls />;
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

  const handleChangeCreateProject = () => {
      navigate("/projectCreate")
  }

  const Team = "Team";
  return (
    <div className="w-full flex items-center justify-center">
      <div className="container w-full">
        <div class="mt-8 text-center">
          <p class="font-medium">{formattedDate}</p>
          <p class="text-3xl font-medium">Good morning,{user.full_name}</p>
        </div>
        <div class="ml-6 mt-12">
          <p class="text-xl font-medium">Steps to get start</p>
        </div>

        <div class="ml-6 mr-2 mt-8 mx-auto flex flex-col lg:flex-row lg:space-x-4 ">
          <div className="w-full lg:w-4/12 flex flex-col mt-0 mb-2 lg:mt-0">
            <div class="col-span-2 row-span-2 flex  flex-col items-center justify-center rounded-2xl bg-glasses backdrop-blur-12 bg-opacity-50 py-4">
              <button class="flex w-4/5 items-center rounded-2xl border-2 border-sky-600 bg-blue-100 p-1">
                <div class="ml-2 h-4 w-4 rounded-full bg-slate-500"></div>
                <span class="ml-2 text-sm font-medium text-gray-500">
                  Create new project
                </span>
              </button>
              <button class="mt-4 flex w-4/5 items-center rounded-2xl border-2 border-sky-600 bg-blue-100 p-1">
                <div class="ml-2 h-4 w-4 rounded-full bg-slate-500"></div>
                <span class="ml-2 text-sm font-medium text-gray-500">
                  Complete your profile
                </span>
              </button>
              <button class="mt-4 flex w-4/5 items-center rounded-2xl border-2 border-sky-600 bg-blue-100 p-1">
                <div class="ml-2 h-4 w-4 rounded-full bg-slate-500"></div>
                <span class="ml-2 text-sm font-medium text-gray-500">
                  Continue project
                </span>
              </button>
            </div>
            <div class="col-span-2 mt-10 rounded-lg bg-glasses backdrop-blur-12 bg-opacity-50 pb-4">
              <p class="ml-8 mt-4 text-xl font-medium">Project</p>
              <button onClick={handleChangeCreateProject} class="ml-12 mt-4 flex items-center">
                <div class="flex h-8 w-8 items-center justify-center rounded-2xl border-2 border-dashed border-sky-500">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/plus-math.png"
                    alt="plus-math"
                  />
                </div>
                <span class="ml-4 text-sm font-medium"> Create projects </span>
              </button>
              {projectList.map((project) => 
                <div class="ml-12 mt-4 flex items-center">
                <div class="flex h-8 w-8 items-center justify-center rounded-2xl">
                  <img
                    width="96"
                    height="96"
                    src="https://img.icons8.com/fluency/96/personal-video-recorder-menu.png"
                    alt="personal-video-recorder-menu"
                  />
                </div>
                <span class="ml-4 text-sm font-medium"> {project.project_name} </span>
              </div>
              )}

            </div>
          </div>

          <div className="w-full lg:w-8/12 flex flex-col bg-glasses backdrop-blur-12 bg-opacity-50 rounded-lg ">
            <div className="flex flex-row justify-start border-b border-gray-500  ">
              <div className="flex items-center p-3 ml-1">
                {user.photoURL === null ? (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full">
                    <UserProfilePic
                      name={user.full_name}
                      size={8}
                    ></UserProfilePic>
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
              <div className="text-sm font-medium text-gray-500 flex flex-col justify-between">
                <div>
                  {" "}
                  <h1 className="text-lg font-semibold text-gray-500 pt-3 pb-1 px-1">
                    My Task
                  </h1>
                  <div>
                    <ul className="flex flex-wrap -mb-px">
                      <li className="me-2">
                        <a
                          href="#"
                          className="inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        >
                          Upcomming
                        </a>
                      </li>
                      <li className="me-2">
                        <a
                          href="#"
                          className="inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        >
                          OverDue
                        </a>
                      </li>
                      <li className="me-2">
                        <a
                          href="#"
                          className="inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        >
                          Complete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
                        <tr key={task.id} class="text-gray-700">
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
                                {task.project_id !== null ? (
                                  <FaUsers />
                                ) : (
                                  <FaUser />
                                )}
                                <div
                                  class="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                ></div>
                              </div>
                              {task.project_id !== null ? (
                                <span className="text-x whitespace-nowrap">
                                  {task.project
                                    ? task.project.project_name
                                    : Team}
                                </span>
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
                          <td class="px-4 py-2 text-sm border">
                            {task.due_date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <div className="w-full flex items-center justify-center -mt-6 mb-4">
                <button onClick={() =>{setTab("MyTask")}}>See More...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
