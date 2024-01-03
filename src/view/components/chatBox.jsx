import React from "react";

import { FaPlus } from "react-icons/fa";

const ChatBox = ({team}) => {
  return (
    <div className="flex flex-col justify-center item-center mt-[-16px]">
      <div class="flex justify-center h-full antialiased text-gray-800">
        <div class="flex flex-row h-[460px] w-[680px] overflow-x-hidden">
          <div class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-glasses backdrop-blur-12 h-full px-3 pt-3 pb-1">
              <div className="sticky top-0 pb-2 border-b border-gray-400 z-10">
                <h1 className="text-lg font-bold">Chart Header</h1>
              </div>
              <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <div class="grid grid-cols-12 gap-y-2">
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                          <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                            Seen
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-row items-center h-16 rounded-xl bg-glasses backdrop-blur-12 w-full px-4">
                <div>
                  <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex-grow ml-4">
                  <div class="relative w-full">
                    <input
                      type="text"
                      class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="ml-4">
                  <button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span>Send</span>
                    <span class="ml-2">
                      <svg
                        class="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="flex flex-row items-center h-16 rounded-xl px-4 mt-1">
                <div className="flex flex-row justify-between w-full items-center">
                  <div class="flex items-center text-sm  px-1 pb-2">
                    <button
                      type="button"
                      className="px-3 py-2 mr-3 gap-x-1.5 rounded-md text-white bg-blue-500 bg-opacity-80  hover:bg-blue-600 flex items-center text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
                    >
                      <FaPlus className="w-3 h-3" />
                      <div className="ml-2">Create Task</div>
                    </button>
                  </div>
                  <div class="flex flex-row relative">
                    <img
                      src="https://source.unsplash.com/ILip77SbmOE/900x900"
                      class="w-7 h-7 rounded-full border-2 "
                    ></img>
                    <img
                      src="https://source.unsplash.com/ILip77SbmOE/900x900"
                      class="w-7 h-7 rounded-full border-2  "
                    ></img>
                    <img
                      src="https://source.unsplash.com/ILip77SbmOE/900x900"
                      class="w-7 h-7 rounded-full border-2 "
                    ></img>
                    <img
                      src="https://source.unsplash.com/ILip77SbmOE/900x900"
                      class="w-7 h-7 rounded-full border-2 "
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
