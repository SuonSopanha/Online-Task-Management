// src/Modal.js
import React from "react";
import { useState, useEffect, useContext } from "react";

import {
  FaCheckCircle,
  FaClock,
  FaSave,
  FaSortDown,
  FaTimesCircle,
  FaTrash,
  FaTrashRestore,
} from "react-icons/fa";

import EditableBox from "./editableBox";
import DropdownButton from "./dropdownState";
import CompleteBox from "./modalComponents/completebox";
import TaskName from "./modalComponents/taskName";
import TaskAssignee from "./modalComponents/taskAssignee";
import TaskDueDate from "./modalComponents/taskDueDate";
import TaskStatus from "./modalComponents/taskStatus";
import TaskProjectbox from "./modalComponents/taskProjectbox";
import NumberInput from "./modalComponents/numberInput";

import { auth } from "../../firebase/config";
import {
  updateRtTaskByID,
  deleteRtTaskByID,
  createRtTask,
} from "../../firebase/taskCRUD";
import { getprojecByID } from "../../firebase/projectCRUD";
import { getUserByID } from "../../firebase/usersCRUD";

import { modalContext } from "../part/test";
import { createNotification } from "../../firebase/notification";

const ProjectCreateTaskModal = ({ isOpen, isClose, taskData }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [task, setTask] = useState(taskData ? taskData : {});
  const { tabID } = useContext(modalContext);
  const [members, setMembers] = useState([]);

  const timestamp = Date.now();
  const formattedDate = new Date(timestamp).toLocaleDateString("en-KH", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-KH", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
  };

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  let newData = {}

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // The user object will be null if no user is logged in
      newData = {
        project_id: taskData.project_id ? taskData.project_id : "",
        user_id: auth.currentUser.uid,
        task_name: taskData.task_name ? taskData.task_name : "",
        description: taskData.description ? taskData.description : "",
        due_date: taskData.due_date ? taskData.due_date : "",
        task_category: taskData.task_category ? taskData.task_category : "To Do",
        tracking: [],
        work_hour_required: taskData.work_hour_required
          ? taskData.work_hour_required
          : "",
        status: taskData.status ? taskData.status : "On Track",
        priority: taskData.priority ? taskData.priority : "Low",
        assignee_id: taskData.assignee_id ? taskData.assignee_id : "",
        assignee_dates: taskData.assignee_dates ? taskData.assignee_dates : "",
        complete: taskData.complete ? taskData.complete : false,
        complete_date: taskData.complete_date ? taskData.complete_date : "",
    
      }
      setTask(newData);
    });

    return () => unsubscribe();

  }, [])

  const refresh = () => {
    setInterval(() => {
      setMembers(members);
    }, 2000);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    isClose();
  };

  const handleTaskNameChange = (newName) => {
    newData.task_name = newName;
    setTask({ ...task, task_name: newName });
    console.log(task.name);
  };

  const onCompletedChange = (complete) => {
    newData.complete = complete;
    setTask({ ...task, complete: complete });
  };

  const onAssigneeChange = (newAssignee) => {
    newData.assignee_id = newAssignee;
    setTask({ ...task, assignee_id: newAssignee });
    console.log(task.assignee_id);
  };

  const onDescriptionChange = (newDescription) => {
    newData.description = newDescription;
    setTask({ ...task, description: newDescription });
    console.log(task.description);
  };

  const onDueDateChange = (newDueDate) => {
    newData.due_date = formatDate(newDueDate);
    setTask({ ...task, due_date: formatDate(newDueDate)});
    console.log(task.due_date);
  };

  const onProjectChange = (newProject) => {
    newData.project_id = newProject;
    setTask({ ...task, project_id: newProject });
    console.log(task.project_id);
  };

  const onHourRequiredChange = (newHourRequired) => {
    newData.work_hour_required = newHourRequired;
    setTask({ ...task, work_hour_required: newHourRequired });
    console.log(task.work_hour_required);
  };

  const onCategoryChange = (newCategory) => {
    newData.task_category = newCategory;
    setTask({ ...task, task_category: newCategory });
    console.log(task.task_category);
  };

  const onChangeStatusAndPrority = (number, state) => {
    if (number === 1) {
      newData.staus = state;
      setTask({ ...task, status: state });
      console.log(task.status);
    }
    if (number === 2) {
      newData.priority = state;
      setTask({ ...task, priority: state });
      console.log(task.priority);
    }
  };


    const currentDate = new Date();
    // Get the current time in 12-hour format with AM/PM
    const currentTime = currentDate.toLocaleTimeString("en-KH", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  
    // Get the current date in MM/DD/YYYY format
    const currentDateFormatted = currentDate.toLocaleDateString("en-KH", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

  const onSaveButton = async () => {
    const assignID = task.assignee_id ? task.assignee_id.assignee_id : null;
    const newFeild = {
      project_id: tabID,
      user_id: auth.currentUser.uid,
      task_name: task.task_name,
      description: task.description,
      due_date: task.due_date,
      task_category: task.task_category,
      tracking: task.tracking,
      work_hour_required: task.work_hour_required,
      status: task.status,
      priority: task.priority,
      assignee_id: task.assignee_id.assignee_id,
      assignee_dates: formattedDate,
      complete: task.complete,
      complete_date: task.complete_date,
    };

    const newNoti = {
      Date: formattedDate,
      time: currentTime,
      user_id: task.assignee_id.assignee_id,
      notification_type: "task assign",
      notification_content: task.task_name + " has been assign",
      source : {
        id: task.assignee_id.assignee_id,
        type: 2
      }

    }
    console.log(task);
    await createRtTask(task);
    await createNotification(newNoti);
    handleClose();
  };

  console.log(taskData.priority, "THIS");
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="w-full sm:w-screen max-h-3xl max-w-3xl mx-auto my-6 mt-48">
            {/* Content */}
            <div className="relative flex flex-col w-full bg-sky-200 bg-opacity-75 backdrop-blur-12 border-0 rounded-lg outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-center justify-between p-2 border-b border-solid border-gray-500 rounded-t">
                <CompleteBox
                  IsComplete={taskData.complete}
                  OnChange={onCompletedChange}
                  className="ml-2"
                />
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-gray-600 text-lg leading-none font-semibold items-center"
                  onClick={handleClose}
                >
                  <FaTimesCircle className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center justify-start px-2 py-3 border-b border-solid border-gray-500 rounded-t">
                <TaskName
                  name={taskData.task_name}
                  onNameChange={handleTaskNameChange}
                />

                <DropdownButton
                  type={"category"}
                  initState={taskData.task_category}
                  handleChange={onCategoryChange}
                />
              </div>
              {/* Body */}
              <div className="flex flex-row justify-start space-x-5 border-b border-gray-500 p-3 items-cente text-sm sm:text-base">
                <div className="w-24">Assignee</div>
                {/* Conditionally render TaskAssignee only when members is available */}
                {members.length > 0 && (
                  <TaskAssignee
                    Assignee={{
                    assignee_id: "",
                    name: "User",
                  }}
                    OnChange={onAssigneeChange}
                  />
                )}
              </div>
              <div className="flex flex-row justify-start space-x-5 border-b text-sm sm:text-base border-gray-500 p-3 items-center">
                <div className="w-24">DueDate</div>
                <TaskDueDate
                  DueDate={taskData.due_date}
                  OnChange={onDueDateChange}
                />
                <div className="w-28">Hour Required</div>
                <NumberInput
                  init={taskData.work_hour_required}
                  OnChange={onHourRequiredChange}
                />
              </div>
              <div className="flex flex-row justify-start space-x-5 border-b text-sm sm:text-base border-gray-500 p-3 items-center">
                <TaskStatus
                  StatusState={taskData.status}
                  PrioritySate={taskData.priority}
                  OnChange={onChangeStatusAndPrority}
                />
              </div>
              <div className="flex flex-col justify-start space-y-3 border-b text-sm sm:text-base border-gray-500 p-3 items-start">
                <div className="w-24">Description</div>
                <EditableBox
                  init={taskData.description}
                  OnChange={onDescriptionChange}
                  className="w-full"
                ></EditableBox>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-end space-x-2 p-6 border-t border-solid border-gray-300 rounded-b">
                <div className="flex flex-row px-2 py-1 justify-center items-center bg-blue-500 hover:bg-blue-800 rounded-lg">
                  <FaSave className="w-3 h-3 text-white" />
                  <button
                    className="text-white background-transparent font-bold uppercase px-1 py-1 text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                    onClick={onSaveButton}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCreateTaskModal;
