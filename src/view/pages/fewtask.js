import React from "react";

const Fewtask = () => {
  return (
    <>
      <div class="m-10">
        <div>
          <p class="text-xl font-medium dark:text-slate-500">
            What are few tasks that you have to do for
          </p>
          <p class="mb-4 text-xl font-medium dark:text-slate-500">Web Dev?</p>
        </div>
        <div class="my-12">
          <div>
            <button class="focus:shadow-outline m-1 rounded-lg border-2 p-2 hover:border-sky-500 dark:text-gray-500 w-96 font-medium text-start pl-4">
              <a href="#">Design</a>
            </button>
          </div>
          <div>
            <button class="focus:shadow-outline m-1 rounded-lg border-2 p-2 hover:border-sky-500 dark:text-gray-500 w-96 font-medium text-start pl-4">
              <a href="#">Coding</a>
            </button>
          </div>
          <div>
            <button class="focus:shadow-outline m-1 rounded-lg border-2 p-2 hover:border-sky-500 dark:text-gray-500 w-96 font-medium text-start pl-4">
              <a href="#">Testing</a>
            </button>
          </div>
        </div>
        <button class="mt-8 h-10 w-28 rounded-xl bg-blue-700 font-medium text-white">
          <a href="#">Continue</a>
        </button>
      </div>
    </>
  );
};
