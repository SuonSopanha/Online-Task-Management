import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../firebase/projectCRUD";
import { auth } from "../../firebase/config";

const TeamMilestone = () => {
  return (
    <div className="p-10 w-auto h-auto">
      <div>
        <p className="mb-4 text-3xl font-medium">Set Your Team Milestone</p>
      </div>
      <div className="mt-5">
        <p className="font-medium">Targeting Any Milesone for Success</p>
      </div>
      <div className="mt-10 flex flow-col space-x-16">
        <div>
          <div>Team Milestone</div>
          <input
            className="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
            type="text"
            placeholder="Mile Stone"
          />
        </div>
        <div>
          <div>DueDate</div>
          <input
            className="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
            type="Date"
            placeholder="DueDate"
          />
        </div>
      </div>
      <div className="mt-4 flex flow-col space-x-16">
        <div>
          <div>MileStone Tag</div>
          <input
            className="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
            type="text"
            placeholder="Tag"
          />
        </div>
      </div>
      <div className="mt-4 ">
        <div>
          <div>Description</div>
          <textarea
            className="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
            type="text"
            placeholder="Description"
          />
        </div>
      </div>
      <button className="mt-8 h-10 w-28 rounded-xl bg-blue-700 font-medium text-white">
        Continue
      </button>
    </div>
  );
};

export default TeamMilestone;
