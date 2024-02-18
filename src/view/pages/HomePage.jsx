import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { auth } from "../../firebase/config";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

export default function HomePage() {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsSignIn(true);
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

  return (
    <div className="w-full h-fit bg-gradient-to-r from-[#65A0FD] via-[#E8CCCC] to-[#FFA9F1B5]">
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between w-screen  h-12 bg-transparent">
          <div className="flex flex-row ml-[-30px] sm:space-x-3 px-5 xl:px-10 py-3 justify-between items-center">
            <button
              type="button"
              className="sidebar-btn flex px-3 py-1 items-center justify-center rounded-lg text-gray-700 hover:bg-blue-600 sm:w-1/2 sm:px-2 sm:py-1 sm:text-base"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="px-5 xl:px-12 py-3 flex w-full items-center ">
            <div className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <div className="relative border-2 border-gray-50 px-3 py-1 rounded-2xl bg-white sm:w-64 md:w-80">
                <i className="fa-solid fa-magnifying-glass text-gray-500 px-0 "></i>
                <input
                  type="text"
                  className="text-sm px-2"
                  name="search-bar"
                  placeholder="Search"
                ></input>
              </div>
            </div>

            <div className="hidden xl:flex space-x-5 items-center">
              <a className="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <a className="xl:hidden flex mr-6 items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
        </nav>
      </header>
      <body className="bg-transparent">
        <div className="text-center w-full">
          <div className="pt-40 pb-32">
            <h1 className="text-3xl font-bold p-4 animate-fadeIn">
              The best platform for<br></br> cross-functional work
            </h1>
            <p className="text-lg pb-4 animate-slideInRight">
              Want more efficiency in your organization?<br></br> Asana is easy
              for all teams to use,<br></br> so you can deliver quality work
              faster.
            </p>
            <div className="flex justify-center space-x-3 animate-bounce">
              <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 round-sm border-3 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <Link to="/login">Get Started</Link>
              </button>
              <button className="bg-gray-100 hover:bg-gray-700 text-black font-bold py-2 px-4 round-sm border-3 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <Link to={isSignIn ? "/app" : "/login"}>Continue Work</Link>
              </button>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold py-3 animate-fadeIn">
              What Set Our Web
            </h1>
            <div className="flex justify-between items-center sm:px-4 md:px-16 lg:px-24 xl:px-24 2xl:px-24 space-x-2 pb-4">
              <div className="text-start animate-slideInLeft">
                <h1 className="text-lg font-semibold">
                  More clarity and accountability
                </h1>
                <p>
                  Connect strategic goals to the teams that help achieve them.
                  <br />
                  See progress in real time, update stakeholders, and keep the
                  company on track.
                </p>
              </div>
              <div className="border-8 border-gray-100 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-[650px] h-[300px]"
                  alt="profile"
                ></img>
              </div>
            </div>

            <div className="flex justify-between items-center sm:px-4 md:px-16 lg:px-24 xl:px-24 2xl:px-24 space-x-2 pb-4">
              <div className="border-8 border-gray-100 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFzayUyMG9yZ2FuaXppbmd8ZW58MHx8MHx8fDA%3D"
                  className="w-[750px] h-[300px]"
                  alt="profile"
                ></img>
              </div>
              <div className="text-end animate-slideInRight">
                <h1 className="text-lg font-semibold">
                  More clarity and accountability
                </h1>
                <p>
                  Connect strategic goals to the teams that help achieve them.
                  <br />
                  See progress in real time, update stakeholders, and keep the
                  company on track.
                </p>
              </div>
            </div>
          </div>

          <div class="container mx-auto py-8">
            <h1 class="text-3xl font-bold mb-4">Task Management Q&A</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-glasses bg-opacity-50 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h2 class="text-xl font-bold mb-2">
                  How do I create a new task?
                </h2>
                <p class="text-gray-700">
                  To create a new task, simply click on the "Add Task" button,
                  fill out the required information, and click "Save".
                </p>
              </div>
              <div class="bg-glasses bg-opacity-50 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h2 class="text-xl font-bold mb-2">
                  Can I assign tasks to other team members?
                </h2>
                <p class="text-gray-700">
                  Yes, you can assign tasks to other team members by selecting
                  their name from the dropdown menu in the task creation form.
                </p>
              </div>
              <div class="bg-glasses bg-opacity-50 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h2 class="text-xl font-bold mb-2">
                  How do I mark a task as complete?
                </h2>
                <p class="text-gray-700">
                  To mark a task as complete, simply click on the checkbox next
                  to the task name. This will automatically update the task
                  status.
                </p>
              </div>
              <div class="bg-glasses bg-opacity-50 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h2 class="text-xl font-bold mb-2">
                  Can I set deadlines for tasks?
                </h2>
                <p class="text-gray-700">
                  Yes, you can set deadlines for tasks by entering the desired
                  due date in the task creation form. You'll receive
                  notifications as the deadline approaches.
                </p>
              </div>
            </div>
          </div>
          <div class="container mx-auto py-8">
            <h1 class="text-3xl font-bold mb-4">What Our Users Are Saying</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-glasses bg-opacity-50 rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p class="text-gray-700 mb-4">
                  "I've tried several task management tools, but this one is by
                  far the best! It's intuitive, easy to use, and has helped me
                  stay organized and productive."
                </p>
                <p class="text-gray-600">- John Doe</p>
              </div>

              <div class="bg-glasses bg-opacity-50 rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p class="text-gray-700 mb-4">
                  "I love how customizable this task management tool is. I can
                  easily create tasks, set deadlines, and collaborate with my
                  team. It's been a game-changer for us!"
                </p>
                <p class="text-gray-600">- Jane Smith</p>
              </div>

              <div class="bg-glasses bg-opacity-50 rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p class="text-gray-700 mb-4">
                  "As a freelancer, staying organized is crucial. This task
                  management platform has helped me streamline my workflow and
                  prioritize tasks effectively. Highly recommend!"
                </p>
                <p class="text-gray-600">- Alex Johnson</p>
              </div>

              <div class="bg-glasses bg-opacity-50 rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p class="text-gray-700 mb-4">
                  "I'm a big fan of the clean and simple interface of this task
                  management platform. It's not cluttered with unnecessary
                  features, yet it still provides everything I need to stay
                  organized and on track."
                </p>
                <p class="text-gray-600">- Laura Garcia</p>
              </div>
              <div class="bg-glasses bg-opacity-50 rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p class="text-gray-700 mb-4">
                  "This task management tool has saved me so much time and
                  effort. I used to spend hours trying to stay organized, but
                  now I can easily manage my tasks and focus on what really
                  matters."
                </p>
                <p class="text-gray-600">- Daniel Clark</p>
              </div>

              <div class="bg-glasses bg-opacity-50 rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p class="text-gray-700 mb-4">
                  "I'm impressed by the level of customer support provided by
                  this task management platform. Anytime I've had a question or
                  issue, the team has been quick to respond and incredibly
                  helpful."
                </p>
                <p class="text-gray-600">- Amanda White</p>
              </div>
            </div>
          </div>
        </div>
        <footer class="bg-gray-900 dark:bg-gray-900">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                <a href="https://flowbite.com/" class="flex items-center">
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Online Task Management
                  </span>
                </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="https://flowbite.com/" class="hover:underline">
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        class="hover:underline"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a
                        href="https://github.com/themesberg/flowbite"
                        class="hover:underline "
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        class="hover:underline"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" class="hover:underline">
                  Flowbite™
                </a>
                . All Rights Reserved.
              </span>
              <div class="flex mt-4 sm:justify-center sm:mt-0">
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span class="sr-only">Discord community</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">GitHub account</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}
