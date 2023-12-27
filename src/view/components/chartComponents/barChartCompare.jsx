import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const BarChartCompare = () => {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "Bar 1",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
            {
                label: "Bar 2",
                data: [8, 15, 5, 10, 7, 9],
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
                text: "Chart.js Bar Chart",
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
