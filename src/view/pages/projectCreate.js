import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../firebase/projectCRUD";
import { auth } from "../../firebase/config";

const project_id = "";

const ProjectCreate = () => {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  const handleContinue = async () => {
    // Add any validation logic here before creating the project
    if (projectName.trim() === "") {
      alert("Please enter a project name.");
      return;
    }

    // Create the project or perform any further actions
    const project_id = await createProject({ project_name: projectName,owner_id:auth.currentUser.uid,members:[] })
    console.log(project_id);
    navigate('/team',{ state: { project_id:project_id} });
  };

  return (
    <div className="p-10 w-auto h-auto">
      <div>
        <p className="mb-4 text-3xl font-medium">What's your project Name?</p>
      </div>
      <div className="mt-5">
        <p className="font-medium">Name for your project.</p>
      </div>
      <div className="mt-10">
        <input
          className="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
      <button
        className="mt-8 h-10 w-28 rounded-xl bg-blue-700 font-medium text-white"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default ProjectCreate;
