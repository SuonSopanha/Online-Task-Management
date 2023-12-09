import React from "react";

import EditableBox from "./editableBox";

const TeamOverview = () => {
  return (
    <>
      <div className="container w-full h-fit flex flex-row space-x-4">
        <div className="w-8/12 flex flex-col">
          <div className="w-full h-fit  bg-glasses backdrop-blur-12 px-4 py-2 space-y-5 rounded-xl mb-4">
            <h1 className="text-2xl font-semibold text-gray-700 pt-2">Member</h1>

            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 pb-2">
              <div className="flex items-center">
                <img
                  className="object-cover w-12 h-12 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-gray-700 font-bold">Oliver Aguilerra</p>
                  <p className="text-xs text-gray-500">Product Manager</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="object-cover w-12 h-12 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-gray-700 font-bold">Oliver Aguilerra</p>
                  <p className="text-xs text-gray-500">Product Manager</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="object-cover w-12 h-12 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-gray-700 font-bold">Oliver Aguilerra</p>
                  <p className="text-xs text-gray-500">Product Manager</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="object-cover w-12 h-12 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-gray-700 font-bold">Oliver Aguilerra</p>
                  <p className="text-xs text-gray-500">Product Manager</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="object-cover w-12 h-12 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-gray-700 font-bold">Oliver Aguilerra</p>
                  <p className="text-xs text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-fit bg-glasses backdrop-blur-12 px-4 py-2 space-y-5 rounded-xl mb-4">
            <h1 className="text-2xl font-semibold text-gray-700 pt-2">Project</h1>

            <ul className="flex flex-col space-y-4 ">
              <li>
                <div class="flex items-center text-sm border-b border-gray-900 px-1 pb-2">
                  <div class="relative w-10 h-10 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-lg"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-700 ">Add Project</p>
                  </div>
                </div>
              </li>
              <li className="flex flex-row justify-between border-b border-gray-700 w-full items-center">
                <div class="flex items-center text-sm  px-1 pb-2">
                  <div class="relative w-10 h-10 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-lg"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-700">Add Project</p>
                  </div>
                </div>
                <div class="flex flex-row relative">
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2 "
                  ></img>
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2  "
                  ></img>
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2 "
                  ></img>
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2 "
                  ></img>
                </div>
              </li>

              <li className="flex flex-row justify-between border-b border-gray-700 w-full items-center">
                <div class="flex items-center text-sm  px-1 pb-2">
                  <div class="relative w-10 h-10 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-lg"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-700">Add Project</p>
                  </div>
                </div>
                <div class="flex flex-row relative">
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2 "
                  ></img>
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2  "
                  ></img>
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2 "
                  ></img>
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2 "
                  ></img>
                </div>
              </li>
              <li className="flex flex-row justify-between border-b border-gray-700 w-full items-center">
                <div class="flex items-center text-sm  px-1 pb-2">
                  <div class="relative w-10 h-10 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-lg"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-700">Add Project</p>
                  </div>
                </div>
                <div class="flex flex-row relative">
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2 "
                  ></img>
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2  "
                  ></img>
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2 "
                  ></img>
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    class="w-7 h-7 rounded-full border-2 "
                  ></img>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-4/12 flex flex-col">
          <div className="w-full bg-glasses backdrop-blur-12 p-4 rounded-xl text-gray-700 mb-4">
            <div className="text-2xl font-bold">About Us</div>

            <div className="p-2">
              <EditableBox />
            </div>
          </div>

          <div class="flex flex-col  bg-glasses backdrop-blur-12 p-4 rounded-xl text-gray-700 w-full h-fit ">
            <div>
              <span class="text-xs">Rizky Design Team</span>
            </div>
            <div>
              <p class="text-xl font-bold my-1">Cryptoku landing page</p>
            </div>

            <div>
              <p class="text-xs">How to be cool and Make them good</p>
              <div class="px-2 py-1 text-xs my-1 font-semibold leading-tight w-fit text-green-700 bg-green-100 rounded-lg">
                    Acceptable
              </div>
            </div>

            <div class="text-xs mb-2">5/12 Task Completed</div>
            <div class="w-full bg-gray-400 p-0">
              <div class="w-[50%] bg-blue-500 h-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamOverview;
