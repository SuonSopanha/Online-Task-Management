import React from "react";

import { FaCheckCircle, FaClipboard, FaClipboardList } from "react-icons/fa";


import BarChart from "./barChart";
import BarChartCompare from "./barChartCompare";
import PieChart from "./pieChart";
import LineChart from "./lineChart";
import LineChartCompare from "./lineChartCompare";
import RadarChart from "./radarChart";


const TeamDashboard = () => {

  
    return (
    <div className="flex flex-col">

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
          <li className=" bg-glasses backdrop-blur-lg p-2 rounded"><BarChart /></li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded"><BarChartCompare /></li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded"><PieChart /></li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded"><LineChart /></li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded"><LineChartCompare /></li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded"><RadarChart /></li>
        </ul>
      </div>
    </div>
  );
};

export default TeamDashboard;
