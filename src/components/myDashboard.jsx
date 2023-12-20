import React from "react";

import { FaCheckCircle, FaClipboard, FaClipboardList } from "react-icons/fa";

import BarChart from "./chartComponents/barChart";
import BarChartCompare from "./chartComponents/barChartCompare";
import PieChart from "./chartComponents/pieChart";
import LineChart from "./chartComponents/lineChart";
import LineChartCompare from "./chartComponents/lineChartCompare";
import RadarChart from "./chartComponents/radarChart";

const MyDashboard = () => {

  const currentDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = currentDate.toLocaleDateString('en-KH', options);

  return (
    <div className="flex flex-col">
      <div className=" flex justify-between items-centertext-2xl bg-glasses backdrop-blur-12 font-semibold p-4 m-2 rounded-lg">
        <div className="flex items-center justify-start">
          <div class="relative w-12 h-12 rounded-full md:block">
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
            <p className="ml-2">Oliver Aguilerra</p>
            <p className="ml-2">Dashboard</p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          {/*today Date*/}
          <p className="text-sm">{formattedDate}</p>

        </div>
      </div>

      <div className=" m-1 p-1 rounded">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-2">
          <li className="bg-glasses backdrop-blur-12 px-2 py-6 rounded flex justify-center items-center">
            <span className="mr-2">
              <FaCheckCircle />
            </span>
            <span className="text-sm m-1">Completed Tasks :</span>
            <span className="text-3xl font-semibold mx-3">5</span>
          </li>
          <li className="bg-glasses backdrop-blur-12 px-2 py-6  rounded flex justify-center items-center">
            <span className="mr-2">
              <FaClipboard />
            </span>
            <span className="text-sm m-1">Completed Tasks :</span>
            <span className="text-3xl font-semibold mx-3">5</span>
          </li>
          <li className="bg-glasses backdrop-blur-12 px-2 py-6  rounded flex justify-center items-center">
            <span className="mr-2">
              <FaClipboardList />
            </span>
            <span className="text-sm m-1">Completed Tasks :</span>
            <span className="text-3xl font-semibold mx-3">5</span>
          </li>
        </ul>

        {/* Chart */}

        <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
          <li className=" bg-glasses backdrop-blur-lg p-2 rounded">
            <BarChart />
          </li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded">
            <BarChartCompare />
          </li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded">
            <PieChart />
          </li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded">
            <LineChart />
          </li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded">
            <LineChartCompare />
          </li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded">
            <RadarChart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyDashboard;
