import React from "react";

const Welcome = () => {
  return (
    <>
      <div class="p-10">
        <div>
          <p class="mb-4 text-3xl font-medium">Welcome to PAS!</p>
          <p>You're signing up as sounsopanha168@gmail.com.</p>
        </div>
        <div class="mt-10">
          <p class="text-xl font-medium">What's your full name?</p>
          <div>
            <input
              class="focus:shadow-outline mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 font-medium leading-tight text-gray-700 shadow focus:border-blue-300 focus:outline-none"
              type="text"
              placeholder="Full name"
            />
          </div>
        </div>
        <button class="mt-16 h-10 w-28 rounded-xl bg-blue-700 font-medium text-white">
          Continue
        </button>

        <div class=" text-sm mt-28">
          <p class="text-zinc-900 ">
            Wrong account{" "}
            <a
              href="#"
              class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              login
            </a>{" "}
            instead
          </p>
        </div>
      </div>
    </>
  );
};


export default Welcome;