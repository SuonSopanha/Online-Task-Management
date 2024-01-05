import React from "react";

const ProjectCreate = () => {
  return (
    <>
      <div class="p-10 w-auto h-auto">
        <div>
          <p class="mb-4 text-3xl font-medium">What's your project Name?</p>
        </div>
        <div class="mt-5">
          <p class="font-medium ">Name for your project.</p>
        </div>
        <div class="mt-10">
          <input
            class="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
            type="text"
            placeholder="Teammate's email"
          />
        </div>
        <button class="mt-8 h-10 w-28 rounded-xl bg-blue-700 font-medium text-white">
          <a href="#">Continue</a>
        </button>
      </div>
    </>
  );
};

export default ProjectCreate;
