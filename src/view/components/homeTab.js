import React from "react";
import { useState, useEffect } from "react";

import { auth } from "../../firebase/config";
import {formattedDate} from "../../utils/formatDate";
import { getTaskByUserID } from "../../firebase/taskCRUD";
import { addAllProjects } from "../../firebase/projectCRUD";
import { addAllMessages } from "../../firebase/messageCRUD";
import { addAllNotification } from "../../firebase/notification";
import { addAllTeam } from "../../firebase/teamCRUD";

import LoadingBalls from "../../utils/loading";

const HomeTab = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, you can update the component state or perform other actions.
        console.log("User is signed in:", user);
        setLoading(false);
      } else {
        // User is signed out.
        console.log("User is signed out");
      }
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  if (loading) {
    return <LoadingBalls />;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="container w-full">
        <div class="mt-8 text-center">
          <p class="font-medium">{formattedDate}</p>
          <p class="text-3xl font-medium">
            Good morning,{auth.currentUser.email}
          </p>
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
              <div class="ml-12 mt-4 flex items-center">
                <div class="flex h-8 w-8 items-center justify-center rounded-2xl border-2 border-dashed border-sky-500">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/plus-math.png"
                    alt="plus-math"
                  />
                </div>
                <span class="ml-4 text-sm font-medium"> Create projects </span>
              </div>
              <div class="ml-12 mt-4 flex items-center">
                <div class="flex h-8 w-8 items-center justify-center rounded-2xl">
                  <img
                    width="96"
                    height="96"
                    src="https://img.icons8.com/fluency/96/personal-video-recorder-menu.png"
                    alt="personal-video-recorder-menu"
                  />
                </div>
                <span class="ml-4 text-sm font-medium"> Group work </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-8/12 flex flex-col bg-glasses backdrop-blur-12 bg-opacity-50 rounded-lg ">
            <div className="flex flex-row justify-start border-b border-gray-500  ">
              <div className="flex items-center p-3 ml-1">
                <div class="relative w-12 h-12 rounded-full md:block">
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
              <div className="text-sm font-medium text-gray-500 flex flex-col justify-between">
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
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
