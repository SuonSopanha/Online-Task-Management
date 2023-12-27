import React, { useState } from "react";

const Inbox = () => {
  const [activeTab, setActiveTab] = useState("notification");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-fit bg-glasses backdrop-blur-12 rounded-sm mt-[-30px] pb-4">
      <div>
        <p className="text-2xl font-bold text-gray-500 ml-6 mt-4 pt-2">Inbox</p>
      </div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <div className="flex flex-row justify-between">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                
                className={`inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "activity"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabClick("activity")}
              >
                Activity
              </a>
            </li>
            <li className="me-2">
              <a
                
                className={`inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "notification"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabClick("notification")}
                aria-current={activeTab === "notification" ? "page" : undefined}
              >
                Notification
              </a>
            </li>
            <li className="me-2">
              <a
                
                className={`inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "messages"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabClick("messages")}
              >
                Messages
              </a>
            </li>
          </ul>
          <div className="flex items-center">
            <button
              type="button"
              className="px-3 py-0 mr-3 h-8 text-white border-1 bg-blue-500 border-blue-600 rounded-lg"
            >
              SendMessage
            </button>
          </div>
        </div>
      </div>

      {/* Your inbox content goes here */}
      <div class="pt-1 pl-4">
        <ul class="space-y-1">
          <li class="relative border-b border-gray-500">
            <div>
              <a
                class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
                
              >
                <svg
                  class="w-3 h-3 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="ml-2 text-sm font-medium text-gray-700">
                  Group
                </span>
              </a>
            </div>
            <div class="text-sm font-medium text-gray-700 pl-3 py-1" >
                <p>Panha</p>
                <p>Group work is going to be hard please do it properly</p>
            </div>

            <div className="flex justify-end text-xs font-medium text-gray-700 px-3 py-1 ">
              <p>2 hours ago</p>
            </div>
          </li>
          <li class="relative border-b border-gray-500">
            <div>
              <a
                class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
                
              >
                <svg
                  class="w-3 h-3 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="ml-2 text-sm font-medium text-gray-700">
                  Group
                </span>
              </a>
            </div>
            <div class="text-sm font-medium text-gray-700 pl-3 py-1" >
                <p>Panha</p>
                <p>Group work is going to be hard please do it properly</p>
            </div>

            <div className="flex justify-end text-xs font-medium text-gray-700 px-3 py-1 ">
              <p>2 hours ago</p>
            </div>
          </li>
          <li class="relative border-b border-gray-500">
            <div>
              <a
                class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300"
                
              >
                <svg
                  class="w-3 h-3 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="ml-2 text-sm font-medium text-gray-700">
                  Group
                </span>
              </a>
            </div>
            <div class="text-sm font-medium text-gray-700 pl-3 py-1" >
                <p>Panha</p>
                <p>Group work is going to be hard please do it properly</p>
            </div>

            <div className="flex justify-end text-xs font-medium text-gray-700 px-3 py-1 ">
              <p>2 hours ago</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inbox;
