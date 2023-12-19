import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaClock } from "react-icons/fa";

const TaskDueDate = ({ DueDate }) => {
  const [selectedDate, setSelectedDate] = useState(
    DueDate !== null ? new Date(DueDate) : null
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Update state or perform other actions as needed
  };

  return (
    <div className="flex flex-row items-center justify-between space-x-2">
      <FaClock />

      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="No Due Date"
        dateFormat="MMMM d, yyyy"
        className="w-full bg-transparent"
      />
    </div>
  );
};

export default TaskDueDate;


