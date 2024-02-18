// Calendar.js
import React, { useState, useEffect, useContext } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { auth } from "../../firebase/config";

import {
  getRtTaskByUserID,
  getRtTaskByAssigneeID,
} from "../../firebase/taskCRUD";
import LoadingBalls from "../../utils/loading";

import { modalContext } from "../part/test";

const TaskCalender = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const getDaysInMonth = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return eachDayOfInterval({ start, end });
  };

  const { openModal, isModalOpen, setModalTask } = useContext(modalContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, you can update the component state or perform other actions.
        console.log("User is signed in:", user);

        getRtTaskByUserID(auth.currentUser.uid, setTaskList);
        getRtTaskByAssigneeID(auth.currentUser.uid, setTaskList);

        setLoading(false);
      } else {
        // User is signed out.
        setError(true);
        console.log("User is signed out");
      }
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, []); // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount

  if (loading) {
    return <LoadingBalls />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto mt-2">
      <div className="flex justify-start items-center mb-4 ml-4 space-x-3">
        <button
          onClick={prevMonth}
          className="flex items-center px-1 py-1 bg-blue-500 bg-opacity-80 text-white rounded"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextMonth}
          className="flex items-center px-1 py-1 bg-blue-500 bg-opacity-80 text-white rounded"
        >
          <FaChevronRight />
        </button>
        <h2 className="text-sm font-semibold text-gray-500">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
      </div>
      <div className="grid grid-cols-7">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm text-gray-500 font-semibold mb-2"
          >
            {day}
          </div>
        ))}
        {getDaysInMonth().map((date) => (
          <div
            key={date}
            className="text-center border-1 border-gray-400 w-42 h-40 w-5/7 sm:w-1/7 overflow-hidden"
          >
            <div className="flex flex-col items-start p-2">
              <span className="text-sm font-semibold">{format(date, "d")}</span>
              {taskList.map((task) => {
                let calenderDate = format(date, "MM/dd/yyyy");
                if (task.due_date === calenderDate) {
                  return (
                    <button
                      key={task.id}
                      className="mt-1"
                      onClick={() => {
                        openModal();
                        setModalTask(task);
                      }}
                    >
                      <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm whitespace-nowrap transition duration-300 transform hover:scale-105">
                        {task.task_name}
                      </span>
                    </button>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCalender;
