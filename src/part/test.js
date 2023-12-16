import React, { useState, createContext } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Inbox from "../pages/inbox";
import MyTask from "../pages/myTask";
import HomeTab from "../components/homeTab";
import ProjectList from "../components/projectList";
import TeamOverview from "../components/teamOverview";
import TeamPage from "../pages/teamPage";
import Project from "../pages/project";
import TeamHeader from "../components/teamHeader";
import TeamDashboard from "../components/teamDashboard";
import MyDashboard from "../components/myDashboard";
import TaskModal from "../components/taskModal";
import SendMessageModal from "../components/sendMessageModal";

export const modalContext = createContext(null);

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("HomeTab");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const setActiveTab = (tab) => {
    setTab(tab);
  };

  return (
    <div className="relative  ">
      {/* Header */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Body content */}
      <div className="flex bg-gradient-to-r from-[#65A0FD] via-[#E8CCCC] to-[#FFA9F1B5] ">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} TabNavigate={setActiveTab} />

        {/* Main content */}
        <div
          className={`w-full h-full transition-all duration-300 ease-in-out mt-[82px] ${
            isOpen ? " pl-32 md:pl-72 sm:pl-4 pr-4" : "pl-4"
          }`}
        >
          {/* Your page content goes here */}

          {/*<Inbox /> */}

          <modalContext.Provider value={{isModalOpen,setIsModalOpen,closeModal,openModal}}>
            {tab === "HomeTab" && <TeamPage />}
            {tab === "Inbox" && <Inbox />}
            {tab === "MyTask" && <MyTask />}
            {tab === "Project" && <Project />}
            {tab === "Team" && <TeamHeader />}
            {tab === "Dashboard" && <MyDashboard />}
            
          </modalContext.Provider>

          
          <div className="w-full h-full flex justify-center items-center m-8">
            <SendMessageModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
            


        </div>
      </div>
    </div>
  );
};

export default Main;
