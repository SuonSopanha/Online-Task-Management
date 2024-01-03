import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const BarChartCompare = ({Data1,Data2}) => {

    const prioritys = Data1.map((item) => item.priority)
    const count1 = Data1.map((item) => item.count)
    const count2 = Data2.map((item) => item.count)


    const data = {
        labels: prioritys,
        datasets: [
            {
                label: "All Task",
                data: count1,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
            {
                label: "Completed",
                data: count2,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Task Priority",
            },
        },
        scales: {
            x: {
                stacked: true, // Ensure that bars are stacked side by side
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="flex w-full h-[300px] justify-center items-center">
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChartCompare;
