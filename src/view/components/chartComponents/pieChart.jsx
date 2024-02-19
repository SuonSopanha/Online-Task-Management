import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({Data}) => {

    const category = Data.map((item) => item.category)
    const counts = Data.map((item) => item.count)

    const data = {
        labels: category,
        datasets: [
            {
                label: "# of Votes",
                data: counts,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(54, 162, 235, 0.8)",
                    "rgba(255, 206, 86, 0.8)",
                    "rgba(75, 192, 192, 0.8)",
                    "rgba(153, 102, 255, 0.8)",
                    "rgba(255, 159, 64, 0.8)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right",
            },
            title: {
                display: true,
                text: "Task Category",
                fontSize: 16, // Adjust the title font size
            },
        },
        elements: {
            arc: {
                borderWidth: 0.5, // Adjust the border width of each segment
            },
        },
        tooltips: {
            bodyFontSize: 12, // Adjust the tooltip body font size
        },
    };

    return (
        <div className="flex justify-center items-center w-full h-[300px]"> {/* Increase the height of the container */}
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
