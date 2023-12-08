import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Inbox from "../pages/inbox";
import MyTask from "../pages/myTask";
import HomeTab from "../components/homeTab";
import ProjectList from "../components/projectList";
import TeamOverview from "../components/teamOverview";


const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("HomeTab")

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const setActiveTab = (tab) => {
      setTab(tab);
  }

  return (
    <div className="relative  ">
      {/* Header */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Body content */}
      <div className="flex bg-gradient-to-r from-[#65A0FD] via-[#E8CCCC] to-[#FFA9F1B5] ">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} TabNavigate={setActiveTab}  />

        {/* Main content */}
        <div
          className={`w-full h-full transition-all duration-300 ease-in-out mt-[82px] ${
            isOpen ? " pl-32 md:pl-72 sm:pl-4 pr-4" : "pl-4"
          }`}
        >
          {/* Your page content goes here */}

          {/*<Inbox /> */}
          
          
          {tab === "HomeTab" && <HomeTab/>}
          {tab === "Inbox" && <Inbox/>}
          {tab === "MyTask" && <MyTask/>}


        </div>
      </div>
    </div>
  );
};

export default Main;



