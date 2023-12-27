import React from "react";

const Primaryrole = () => {
  return (
    <>
      <div class="m-10 w-auto h-auto">
        <div>
          <p class="mb-4 text-3xl font-medium">What's your primary role?</p>
        </div>
        <div class="mt-5">
          <p class="font-medium dark:text-gray-400">
            These will help us tailor PAS for you. We may also reach out to help
            you find the right PAS
          </p>
          <p class="font-medium dark:text-gray-400">products for your team.</p>
        </div>
        <div class="mt-10">
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            class="w-96 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Dropdown divider
            <svg
              class="ms-3 h-2.5 w-2.5 ml-44"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdownDivider"
            class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div class="py-2">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Separated link
              </a>
            </div>
          </div>
        </div>
        <button class="mt-8 h-10 w-28 rounded-xl bg-blue-700 font-medium text-white">
          <a href="#">Continue</a>
        </button>
        <button class="mt-8 h-10 w-28 font-medium dark:text-gray-600">
          <a href="#">Skip</a>
        </button>
      </div>
    </>
  );
};
