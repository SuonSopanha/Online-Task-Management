// src/Modal.js
import React from "react";
import { useState, useEffect } from "react";

import {
  FaCheckCircle,
  FaClock,
  FaSortDown,
  FaTimesCircle,
} from "react-icons/fa";

import EditableBox from "./editableBox";
import DropdownButton from "./dropdownState";
import CompleteBox from "./modalComponents/completebox";
import TaskName from "./modalComponents/taskName";
import TaskAssignee from "./modalComponents/taskAssignee";
import TaskDueDate from "./modalComponents/taskDueDate";
import TaskStatus from "./modalComponents/taskStatus";
import TaskProjectbox from "./modalComponents/taskProjectbox";

const TaskModal = ({ isOpen, isClose, taskData }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [task, setTask] = useState(taskData ? taskData : {});

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    isClose();
  };

  const handleTaskNameChange = (newName) => {
    setTask({ ...taskData, name: newName });
    console.log(task.name);
  };

  const onCompletedChange = (complete) => {
    setTask({ ...taskData, complete: complete });
  };

  const onAssigneeChange = (newAssignee) => {
    setTask({ ...taskData, assignee_id: newAssignee });
    console.log(task.assignee_id);
  };

  const onDescriptionChange = (newDescription) => {
    setTask({ ...taskData, description: newDescription });
    console.log(task.description);
  };

  const onDueDateChange = (newDueDate) => {
    setTask({ ...taskData, due_date: newDueDate });
    console.log(task.due_date);
  };

  const onProjectChange = (newProject) => {
    setTask({ ...taskData, project_id: newProject });
    console.log(task.project_id);
  };

  const onChangeStatusAndPrority = (number, state) => {
    if (number === 1) {
      setTask({ ...task, status: state });
      console.log(task.status);
    }
    if (number === 2) {
      setTask({ ...task, priority: state });
      console.log(task.priority);
    }
  };

  const onSaveButton = () => {
    console.log(task);
    handleClose();
  };

  console.log(taskData.priority,"THIS");
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="w-full sm:w-screen max-h-3xl max-w-3xl mx-auto my-6 mt-48">
            {/* Content */}
            <div className="relative flex flex-col w-full bg-blue-300 bg-opacity-75 backdrop-blur-12 border-0 rounded-lg outline-none focus:outline-none">
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
              <div className="flex items-center justify-start p-2 border-b border-solid border-gray-500 rounded-t">
                <TaskName
                  name={taskData.task_name}
                  onNameChange={handleTaskNameChange}
                />
              </div>
              {/* Body */}
              <div className="flex flex-row justify-start space-x-5 border-b border-gray-500 p-3 items-cente text-sm sm:text-base">
                <div className="w-24">Assignee</div>
                <TaskAssignee Assignee={null} OnChange={onAssigneeChange} />
              </div>
              <div className="flex flex-row justify-start space-x-5 border-b text-sm sm:text-base border-gray-500 p-3 items-center">
                <div className="w-24">DueDate</div>
                <TaskDueDate
                  DueDate={taskData.assignee_dates}
                  OnChange={onDueDateChange}
                />
              </div>
              <div className="flex flex-row justify-start space-x-5 border-b text-sm sm:text-base border-gray-500 p-3 items-center">
                <TaskStatus
                  StatusState={taskData.status}
                  PrioritySate={taskData.priority}
                  OnChange={onChangeStatusAndPrority}
                />
              </div>
              <div className="flex flex-row justify-start space-x-5 border-b text-sm sm:text-base border-gray-500 p-3 items-center">
                <div className="w-24">Project</div>
                <TaskProjectbox Project={null} OnChange={onProjectChange} />
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
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={onSaveButton}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskModal;
