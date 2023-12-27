import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaClock } from "react-icons/fa";

const TaskDueDate = ({ DueDate,OnChange }) => {
  const [selectedDate, setSelectedDate] = useState(
    DueDate !== undefined ? new Date(DueDate) : null
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    OnChange(date);
    // Update state or perform other actions as needed
  };


  useEffect(() => {
    // Call OnChange after the component has re-rendered
    OnChange(selectedDate);
  }, [DueDate]);
  


  return (
    <div className="flex flex-row items-center justify-between space-x-2">
      <FaClock />

      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateChange(date)}
        placeholderText="No Due Date"
        dateFormat="MMMM d, yyyy"
        className="w-full bg-transparent"
      />
    </div>
  );
};

export default TaskDueDate;


