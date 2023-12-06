import React from "react";

const Board = () => {
    return (
        
        <div class="min-h-screen bg-gray-100 flex justify-center items-center">
            <div class="flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 p-4 rounded-xl text-white w-8/12 mx-auto my-auto">
                <div>
                    <span class="text-xs">Rizky Design Team</span>
                </div>
                <div>
                    <p class="text-xl font-bold mt-3 mb-5">Cryptoku landing page</p>
                </div>

                <div class="mb-10 relative">
                    <img src="https://source.unsplash.com/ILip77SbmOE/900x900" class="w-8 rounded-full border-2 float-left absolute"></img>
                    <img src="https://source.unsplash.com/ILip77SbmOE/900x900" class="w-8 rounded-full border-2 float-left absolute left-5"></img>
                    <img src="https://source.unsplash.com/ILip77SbmOE/900x900" class="w-8 rounded-full border-2 float-left absolute left-10"></img>
                    <img src="https://source.unsplash.com/ILip77SbmOE/900x900" class="w-8 rounded-full border-2 float-left absolute left-14"></img>
                </div>
                <div class="text-xs mb-2">
                    5/12 Task Completed
                </div>
                <div class="w-full bg-gray-400 p-0">
                    <div class="w-5/12 bg-white h-1">

                    </div>
                </div>
            </div>

        </div>
          
    );
};

export default Board;