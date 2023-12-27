import React from "react";

const Teamates = () => {
  return (
    <>
      <div class="m-10">
        <div>
          <p class="mb-4 text-lg font-medium">
            Invite a teamate to try PAS together
          </p>
          <p>You can start small by inviting a trusted teamate to</p>
          <p>learn how PAS works with you.</p>
        </div>
        <div class="mt-10">
          <p class=" font-medium">Email Address</p>
          <div>
            <input
              class="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
              type="text"
              placeholder="Teammate's email"
            />
          </div>

          <div>
            <input
              class="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
              type="text"
              placeholder="Teammate's email"
            />
          </div>

          <div>
            <input
              class="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
              type="text"
              placeholder="Teammate's email"
            />
          </div>

          <div>
            <input
              class="focus:shadow-outline focus:border-blue-300 mt-4 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
              type="text"
              placeholder="Teammate's email"
            />
          </div>
        </div>
        <button class="mt-8 h-10 w-28 rounded-xl bg-blue-700 text-white font-medium">
          Continue
        </button>
      </div>
    </>
  );
};
