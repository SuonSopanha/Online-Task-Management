import React from "react";

const Board = () => {
  return (
    <div class="flex justify-center items-center">
      <div class="flex flex-col bg-blue-400 pt-3 pb-2 px-3 rounded-xl text-white w-full mx-auto my-auto">
        <div class="flex flex-row space-x-1 items-center">
          <span>
            <FaUser class="text-white text-xs" />
          </span>

          <span class="text-xs">Rizky Design Team</span>
        </div>
        <div>
          <p class="text-xl font-bold mt-1 mb-2">Cryptoku landing page</p>
        </div>

        <div class="mb-1 flex flex-row justify-start left-0">
          <img
            src="https://source.unsplash.com/ILip77SbmOE/900x900"
            class="w-4 rounded-full border-2 "
          ></img>
          <img
            src="https://source.unsplash.com/ILip77SbmOE/900x900"
            class="w-4 rounded-full border-2 "
          ></img>
          <img
            src="https://source.unsplash.com/ILip77SbmOE/900x900"
            class="w-4 rounded-full border-2"
          ></img>
          <img
            src="https://source.unsplash.com/ILip77SbmOE/900x900"
            class="w-4 rounded-full border-2 "
          ></img>
        </div>
        <div class="text-xs flex space-x-1">
          <span class="px-2 py-1 w-fit font-semibold leading-tight text-green-700 bg-green-100 rounded-lg text-sm">
            Acceptable
          </span>
          <span class="px-2 py-1 w-fit font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-lg text-sm">
            OnTrack
          </span>
        </div>

        <div className="text-xs pt-1 items-end flex justify-end">
          DueDate: {task.dueDate}
        </div>
      </div>
    </div>
  );
};

export default Board;
