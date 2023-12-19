import React from "react";

const HomeTab = () => {


    return(

        <>

            <div class="mt-14 text-center">
                <p class="font-medium">Tuesday, December 12</p>
                <p class="text-3xl font-medium">Good morning, Sky Defender</p>
            </div>
            <div class="ml-6 mt-20">
                <p class="text-xl font-medium">Steps to get start</p>
            </div>

            <div class="ml-6 mr-2 mt-8 grid grid-flow-col grid-rows-4 gap-6">
                <div class="col-span-2 row-span-2 flex h-60 w-4/5 flex-col items-center justify-center rounded-2xl bg-red-100 py-4">
                    <button class="flex w-4/5 items-center rounded-2xl border-2 border-sky-600 bg-slate-300 p-1">
                        <div class="ml-2 h-4 w-4 rounded-full bg-slate-500"></div>
                        <span class="ml-2 text-lg font-medium text-gray-500">Create new project</span>
                    </button>
                    <button class="mt-4 flex w-4/5 items-center rounded-2xl border-2 border-sky-600 bg-slate-300 p-1">
                        <div class="ml-2 h-4 w-4 rounded-full bg-slate-500"></div>
                        <span class="ml-2 text-lg font-medium text-gray-500">Complete your profile</span>
                    </button>
                    <button class="mt-4 flex w-4/5 items-center rounded-2xl border-2 border-sky-600 bg-slate-300 p-1">
                        <div class="ml-2 h-4 w-4 rounded-full bg-slate-500"></div>
                        <span class="ml-2 text-lg font-medium text-gray-500">Continue project</span>
                    </button>
                </div>
                <div class="col-span-2 -mt-10 w-4/5 rounded-lg bg-red-100 pb-4">
                    <p class="ml-8 mt-4 text-xl font-medium">Project</p>
                    <div class="ml-12 mt-4 flex items-center">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-dashed border-sky-500">
                            <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/plus-math.png" alt="plus-math" />
                        </div>
                        <span class="ml-4 text-lg font-medium"> Create projects </span>
                    </div>
                    <div class="ml-12 mt-4 flex items-center">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl">
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/personal-video-recorder-menu.png" alt="personal-video-recorder-menu" />
                        </div>
                        <span class="ml-4 text-lg font-medium"> Group work </span>
                    </div>
                </div>
                <div class="col-span-4 row-span-3 w-full rounded-lg bg-red-100">
                    <div class="flex border-b-2 border-gray-500">
                        <button class="m-4 h-16 w-16 rounded-full border-2 border-dashed border-sky-500"></button>
                        <span class="mt-4 text-2xl font-medium"> My Task </span>
                        <div class="-ml-14 mt-16 border-b-2 border-sky-600 text-lg font-medium">
                            <button>Upcoming</button>
                        </div>
                        <div class="ml-10 mt-16 border-b-2 border-sky-600 text-lg font-medium">
                            <button>Overdue</button>
                        </div>
                        <div class="ml-10 mt-16 border-b-2 border-sky-600 text-lg font-medium">
                            <button>Completed</button>
                        </div>
                    </div>

                    <div>
                        <div class="ml-12 mt-4 flex items-center">
                            <div class="flex h-8 w-12">
                                <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/plus-math.png" alt="plus-math" />
                            </div>
                            <span class="text-lg font-medium"> Upcoming</span>
                        </div>

                        <div class="ml-14 mr-8 mt-4 flex items-center space-x-10 border-t-2 border-neutral-500 pl-6 pt-2">
                            <div>
                                <img width="25" height="25" src="https://img.icons8.com/fluency/48/checked.png" alt="checked" />
                            </div>
                            <span class="ml-2 text-lg font-medium">Design</span>
                            <button class="ml-2 w-32 rounded-xl bg-cyan-400 font-medium">Group work</button>
                            <span class="ml-2">Today-Dec 13</span>
                        </div>
                    </div>
                </div>
            </div>


    

            
        
        </>


    )


}


export default HomeTab