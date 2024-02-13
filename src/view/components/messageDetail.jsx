import React from "react";

const MessageDetail = () => {
  return (
    <>
      <div className="w-full h-full">
        <div class="flex-1 px-2">
          <div class="mb-6">
            <div class="flex items-center justify-between px-2 py-4">
              <div class="flex items-center">
                <img
                  src="https://vojislavd.com/ta-template-demo/assets/img/message3.jpg"
                  class="rounded-full w-8 h-8 border border-gray-500"
                ></img>
                <div class="flex flex-col ml-2">
                  <span class="text-sm font-semibold">Betty Garmon</span>
                  <span class="text-xs text-gray-400">
                    From: bettygarmon@example.com
                  </span>
                </div>
              </div>
              <span class="text-sm text-gray-500">Jan 30, 2022, 10:23 AM</span>
            </div>
            <div class="py-6 pl-2 text-gray-700">
              <p>Hi John!</p>
              <p class="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p class="mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p class="mt-4">
                Sed ut perspiciatis unde omnis iste natus error sit:
              </p>
              <ul class="ml-12 list-disc">
                <li>voluptatem accusantium</li>
                <li>doloremque laudantium</li>
                <li>totam rem aperiam</li>
                <li>eaque ipsa quae ab illo inventore veritatis</li>
                <li>quasi architecto</li>
              </ul>
              <p class="mt-4">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur.
              </p>
              <p class="mt-4">Regards,</p>
              <p>Betty Garmon</p>
            </div>
            <div class="mt-8 flex items-center space-x-4">
              <button class="w-32 flex items-center justify-center space-x-2 py-1.5 text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Reply</span>
              </button>
              <button class="w-32 flex items-center justify-center space-x-2 py-1.5 text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
                <span>Forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageDetail;
