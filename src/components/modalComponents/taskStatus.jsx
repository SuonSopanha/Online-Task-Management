import React from "react";
import { useState,useEffect } from "react";
import DropdownButton from "../dropdownState";

const TaskStatus = ({StatusState,PrioritySate,OnChange}) => {
    const [status, setStatus] = useState(StatusState);
    const [priority, setPriority] = useState(PrioritySate);

    console.log(PrioritySate,StatusState);

    const handleStatusChange = (state) =>{
        setStatus(state);
        OnChange(1,state);
        
    }

    const handlePriorityChange = (state) =>{
        setPriority(state);
        OnChange(2,state);

    }

    useEffect(() => {
        // Call OnChange after the component has re-rendered
        OnChange(1,status);
      }, [StatusState]);

    useEffect(() => {
        // Call OnChange after the component has re-rendered
        OnChange(2,priority);
      }, [PrioritySate]);


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
