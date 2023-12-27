import React from "react";
import { useState } from "react";

import ChatBox from "../components/chatBox";
import TeamOverview from "./teamOverview";
import TeamDashboard from "./teamDashboard";

const TeamHeader = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-fit bg-glasses backdrop-blur-12 rounded-lg mt-[-35px]">
      {/* Header */}
      <div className="flex flex-row justify-start border-b border-gray-500">
        <div className="flex items-center p-3 ml-1">
          <div class="relative w-12 h-12 rounded-full md:block">
            <img
              class="object-cover w-full h-full rounded-xl"
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
            My Team
          </h1>
          <div>
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                    activeTab === "Overview" ? "text-blue-600 border-blue-600" : ""
                  }`}
                  onClick={() => handleTabClick("Overview")}
                >
                  Overview
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3  py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                    activeTab === "Message"
                      ? "text-blue-600 border-blue-600"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Message")}
                  aria-current={activeTab === "Message"}
                >
                  Message
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                    activeTab === "Dashboard" ? "text-blue-600 border-blue-600" : ""
                  }`}
                  onClick={() => handleTabClick("Dashboard")}
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Body content */}

      {activeTab === "Overview" && <TeamOverview />}
      {activeTab === "Message" && <ChatBox />}
      {activeTab === "Dashboard" && <TeamDashboard />}
    </div>
  );
};

export default TeamHeader;
