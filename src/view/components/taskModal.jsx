// src/Modal.js
import React from "react";
import { useState, useEffect } from "react";

import {
  FaCheckCircle,
  FaClipboardList,
  FaClock,
  FaSave,
  FaSortDown,
  FaTimesCircle,
  FaTrash,
  FaTrashRestore,
} from "react-icons/fa";

import { auth } from "../../firebase/config";

import EditableBox from "./editableBox";
import DropdownButton from "./dropdownState";
import CompleteBox from "./modalComponents/completebox";
import TaskName from "./modalComponents/taskName";
import TaskAssignee from "./modalComponents/taskAssignee";
import TaskDueDate from "./modalComponents/taskDueDate";
import TaskStatus from "./modalComponents/taskStatus";
import TaskProjectbox from "./modalComponents/taskProjectbox";
import NumberInput from "./modalComponents/numberInput";

import { updateRtTaskByID, deleteRtTaskByID } from "../../firebase/taskCRUD";
import { getprojecByID } from "../../firebase/projectCRUD";

const TaskModal = ({ isOpen, isClose, taskData }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [task, setTask] = useState(taskData ? taskData : {});
  const [assigneeOption, setAssigneeOption] = useState(null);
  const [projectOption, setProjectOption] = useState(null);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setTask(taskData);
    if (taskData && taskData.project_id !== undefined && taskData.project_id !== null) {
      if (taskData.project_id.length === 20) {
        getprojecByID(taskData.project_id).then((project) => {
          setProjectOption(project);
        });
      }else{
        setProjectOption(null);
      }
    }else{
      setProjectOption(null);
    }
  }, [taskData]);

  const handleClose = () => {
    setIsModalOpen(false);
    isClose();
  };

  const handleTaskNameChange = (newName) => {
    setTask({ ...task, task_name: newName });
    console.log(task.name);
  };

  const onCompletedChange = (complete) => {
    setTask({ ...task, complete: complete });
  };

  const onAssigneeChange = (newAssignee) => {
    setTask({ ...task, assignee_id: newAssignee });
    console.log(task.assignee_id);
  };

  const onDescriptionChange = (newDescription) => {
    setTask({ ...task, description: newDescription });
    console.log(task.description);
  };

  const onDueDateChange = (newDueDate) => {
    setTask({ ...task, due_date: newDueDate });
    console.log(task.due_date);
  };

  const onProjectChange = (newProject) => {
    setTask({ ...task, project_id: newProject });
    console.log(task.project_id);
  };

  const onHourRequiredChange = (newHourRequired) => {
    setTask({ ...task, work_hour_required: newHourRequired });
    console.log(task.work_hour_required);
  };

  const onCategoryChange = (newCategory) => {
    setTask({ ...task, task_category: newCategory });
    console.log(task.task_category);
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
    console.log(task.id);
    updateRtTaskByID(task.id,task);
    handleClose();
  };

  const onDeleteButton = () => {
    deleteRtTaskByID(task.id);
    handleClose();
  };

  
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="w-full sm:w-screen max-h-3xl max-w-3xl mx-auto my-6 mt-48">
            {/* Content */}
            {console.log(task)}
            <div className="relative flex flex-col w-full bg-sky-200 bg-opacity-75 backdrop-blur-12 border-0 rounded-lg outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-center justify-between p-2 border-b border-solid border-gray-500 rounded-t">
                <CompleteBox
                  IsComplete={task.complete}
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
                  name={task.task_name}
                  onNameChange={handleTaskNameChange}
                />

                <DropdownButton
                  type={"category"}
                  initState={task.task_category}
                  handleChange={onCategoryChange}
                />
              </div>
              {/* Body */}

              <div className="flex flex-row justify-start space-x-5 border-b text-sm sm:text-base border-gray-500 p-3 items-center">
                <div className="w-24 font-semibold">DueDate</div>
                <TaskDueDate
                  DueDate={task.due_date}
                  OnChange={onDueDateChange}
                />
                <div className="w-28 font-semibold">Hour Required</div>
                <NumberInput
                  init={task.work_hour_required}
                  OnChange={onHourRequiredChange}
                />
              </div>
              <div className="flex flex-row justify-start space-x-5 border-b text-sm sm:text-base border-gray-500 p-3 items-center">
                <TaskStatus
                  StatusState={task.status}
                  PrioritySate={task.priority}
                  OnChange={onChangeStatusAndPrority}
                />
              </div>
              <div className="flex flex-row justify-start space-x-5 border-b text-sm sm:text-base border-gray-500 p-3 items-center">
                <div className="w-24 font-semibold">Project</div>
                <div className="flex flex-row items-center justify-between space-x-2">
                  <div className="flex w-6 h-6 items-center justify-center rounded-lg bg-sky-600 text-white">
                    <FaClipboardList className="w-4 h-4" />
                  </div>

                  <span>{projectOption !== null ? projectOption.project_name : "No Project"}</span>
                </div>
              </div>
              <div className="flex flex-col justify-start space-y-3 border-b text-sm sm:text-base border-gray-500 p-3 items-start">
                <div className="w-24 font-semibold">Description</div>
                <EditableBox
                  init={task.description}
                  OnChange={onDescriptionChange}
                  className="w-full"
                ></EditableBox>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-end space-x-2 p-6 border-t border-solid border-gray-300 rounded-b">
                <div className="flex flex-row px-2 py-1 justify-center items-center bg-rose-600 rounded-lg">
                  <FaTrash className="w-3 h-3 text-white" />
                  <button
                    className="text-white background-transparent font-bold uppercase px-1 py-1 text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                    onClick={onDeleteButton}
                  >
                    Delete
                  </button>
                </div>
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

export default TaskModal;
