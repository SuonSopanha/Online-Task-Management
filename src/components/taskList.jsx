import React from "react";

const TaskList = () => {
  return (
    <section class="container mx-auto px-6 pb-2 font-mono">
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 uppercase border-b border-gray-600">
                <th class="px-4 py-3">Task Name</th>
                <th class="px-4 py-3 w-1/6">Visibility</th>
                <th class="px-4 py-3 w-1/6">Status</th>
                <th class="px-4 py-3 w-1/4">Due Date</th>
              </tr>
            </thead>
            <tbody class="">
              <tr class="text-gray-700">
                <td class="px-4 py-2 border">
                  <div class="flex items-center text-sm">
                    <div class="relative w-6 h-6 mr-3 rounded-full md:block">
                      <img
                        class="object-cover w-full h-full rounded-full"
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
                      <p class="font-semibold text-black">Sufyan</p>
                      <p class="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-2 text-ms font-semibold border">
                  <div class="flex items-center text-sm">
                    <div class="relative w-4 h-4 mr-3 rounded-full md:block">
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    Only Me
                  </div>
                </td>
                <td class="px-4 py-2 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {" "}
                    Acceptable{" "}
                  </span>
                </td>
                <td class="px-4 py-2 text-sm border">6/4/2000</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-2 border">
                  <div class="flex items-center text-sm">
                    <div class="relative w-6 h-6 mr-3 rounded-full md:block">
                      <img
                        class="object-cover w-full h-full rounded-full"
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
                      <p class="font-semibold text-black">Sufyan</p>
                      <p class="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-2 text-ms font-semibold border">
                  <div class="flex items-center text-sm">
                    <div class="relative w-4 h-4 mr-3 rounded-full md:block">
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    Only Me
                  </div>
                </td>
                <td class="px-4 py-2 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {" "}
                    Acceptable{" "}
                  </span>
                </td>
                <td class="px-4 py-2 text-sm border">6/4/2000</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-2 border">
                  <div class="flex items-center text-sm">
                    <div class="relative w-6 h-6 mr-3 rounded-full md:block">
                      <img
                        class="object-cover w-full h-full rounded-full"
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
                      <p class="font-semibold text-black">Sufyan</p>
                      <p class="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-2 text-ms font-semibold border">
                  <div class="flex items-center text-sm">
                    <div class="relative w-4 h-4 mr-3 rounded-full md:block">
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    Only Me
                  </div>
                </td>
                <td class="px-4 py-2 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Acceptable
                  </span>
                </td>
                <td class="px-4 py-2 text-sm border">6/4/2000</td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TaskList;
