import React from "react";
import { useState } from "react";
import DropdownButton from "../dropdownState";

const TaskStatus = (StatusState,PrioritySate) => {
    const [status, setStatus] = useState(StatusState);
    const [priority, setPriority] = useState(PrioritySate);

    const handleStatusChange = (state) =>{
        setStatus(state);
    }

    const handlePriorityChange = (state) =>{
        setPriority(state);
    }

  return (
    <>
      <div className="w-24">Status</div>
      <DropdownButton type={"status"} initState={StatusState} handleChange={handleStatusChange}></DropdownButton>

      <div className="w-16">Priority</div>
      <DropdownButton type={"priority"} initState={PrioritySate} handleChange={handlePriorityChange}></DropdownButton>
    </>
  );
};

export default TaskStatus;
