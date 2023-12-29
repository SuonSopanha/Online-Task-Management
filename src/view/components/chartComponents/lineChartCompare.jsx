import React from "react";
import { Line } from "react-chartjs-2";

const LineChartCompare = () => {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(191, 255, 0,0.4)",
                borderColor: "rgba(191, 255, 0,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(191, 255, 0,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(191, 255, 0,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            } ,
            {
                label: "My Second dataset",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(255, 165, 0,0.4)",
                borderColor: "rgba(255, 165, 0,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(255, 165, 0,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(255, 165, 0,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    }

    const options = {

        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Line Chart"
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

    return (
        <div className="flex justify-center items-center w-full h-[300px]">
            <Line data={data} options={options} />
        </div>
    )

}

export default LineChartCompare