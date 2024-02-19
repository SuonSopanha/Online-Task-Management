import React from "react";
import { Bar } from "react-chartjs-2";

const LineAverage = ({Data}) => {

    const category = Data.map((item) => item.category);
    const average = Data.map((item) => item.average);

    console.log(category,average)

    const data = {
        labels: category,
        datasets: [
            {
                label: "Bar 1",
                data: average,
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
                display: false,
            },
            title: {
                display: true,
                text: "Average Hour Required",
            },
        },
        scales: {
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




}

export default LineAverage