import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({Data}) => {

    const month = Data.map((item) => item.month)
    const count = Data.map((item) => item.count)

    const data = {
        labels: month,
        datasets: [
            {
                label: "Task Assigned Every Month",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(54, 162, 235, 0.8)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(54, 162, 235, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(54, 162, 235, 1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: count
            }   
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
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

export default LineChart