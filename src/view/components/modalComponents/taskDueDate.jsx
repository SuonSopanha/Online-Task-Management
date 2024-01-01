import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaClock } from "react-icons/fa";

const TaskDueDate = ({ DueDate,OnChange }) => {
  const [selectedDate, setSelectedDate] = useState(
    DueDate !== undefined ? new Date(DueDate) : null
  );

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-KH", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
  };

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(date);
    OnChange(formattedDate);
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
        dateFormat="MM/dd/yyyy"
        className="w-full bg-transparent"
      />
    </div>
  );
};

export default TaskDueDate;


