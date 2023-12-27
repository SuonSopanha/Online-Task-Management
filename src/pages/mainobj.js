import React from "react";

const Mainobj = () => {
  return (
    <>
      <div class="m-10">
        <div>
          <p class="mb-4 text-3xl font-medium">What's your main objective</p>
          <p class="mb-4 text-3xl font-medium">in PAS?</p>
        </div>
        <div class="mt-10">
          <p class="font-medium dark:text-gray-400">
            Your choice here won't limit what you can do in PAS
          </p>
        </div>
        <div class="group relative mt-4 max-w-md">
          <div class="flex items-start rounded-xl border-2 border-zinc-700 p-4 transition-all group-hover:bg-gray-100">
            <div class="w-8">
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/nolan/64/bulleted-list.png"
                alt="bulleted-list"
              />
            </div>
            <span class="ml-4">
              Project and process management <br />
              Plan projects, coordinate tasks, and hit deadlines
            </span>
          </div>
          <div class="absolute right-0 top-0 mr-2 mt-2 hidden w-36 rounded-lg border-2 border-sky-500 bg-white text-center text-sm font-medium text-gray-600 transition-all group-hover:block">
            Recommend for you
          </div>
        </div>

        <div class="relative mt-4 max-w-md">
          <div class="flex items-start rounded-xl border-2 border-zinc-700 p-4">
            <div class="w-8">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/checked--v1.png"
                alt="checked--v1"
              />
            </div>
            <span class="ml-4">
              Personal task management <br />
              Organize to-dos and plan out my work day
            </span>
          </div>
        </div>

        <div class="relative mt-4 max-w-md">
          <div class="flex items-start rounded-xl border-2 border-zinc-700 p-4">
            <div class="w-10">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/bar-chart--v1.png"
                alt="bar-chart--v1"
              />
            </div>
            <span class="ml-4">
              Portfolio and workload management
              <br />
              Monitor status and team-member workload across mutiple projects
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
