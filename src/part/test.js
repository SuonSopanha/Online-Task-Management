import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Inbox from "../pages/inbox";
import MyTask from "../pages/myTask";


const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-blue-100">
      {/* Header */}
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />

      {/* Body content */}
      <div className="flex bg-blue-100">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />

        {/* Main content */}
        <div
          className={`w-full transition-all duration-300 ease-in-out mt-[82px] ${
            isOpen ? " pl-40 md:pl-72 pr-4" : "pr-4"
          }`}
        >
          {/* Your page content goes here */}

          {/*<Inbox /> */}

          <MyTask />

        </div>
      </div>
    </div>
  );
};

export default Main;
