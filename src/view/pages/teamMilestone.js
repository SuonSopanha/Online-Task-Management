import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../firebase/projectCRUD";
import { auth } from "../../firebase/config";



const TeamMilestone = () => {

  return (
    <div className="p-10 w-auto h-auto">
      <div>
        <p className="mb-4 text-3xl font-medium">What's your Team Name?</p>
      </div>
      <div className="mt-5">
        <p className="font-medium">Name for your Team.</p>
      </div>
      <div className="mt-10">
        <input
          className="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
          type="text"
          placeholder="Team Name"

        />
      </div>
      <button
        className="mt-8 h-10 w-28 rounded-xl bg-blue-700 font-medium text-white"
      >
        Continue
      </button>
    </div>
  );
};

export default TeamMilestone;
