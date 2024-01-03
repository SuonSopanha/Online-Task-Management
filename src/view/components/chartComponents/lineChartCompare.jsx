import React from "react";
import { Line } from "react-chartjs-2";

const LineChartCompare = ({Data}) => {

    const month = Data.map((item) => item.month)
    const work_hour = Data.map((item) => item.work_hour_required)
    const hour_spend = Data.map((item) => item.hour_spend)

    const data = {
        labels: month,
        datasets: [
            {
                label: "Hour_Reqiured",
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
                data: work_hour
            } ,
            {
                label: "Hour Spend",
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
                data: hour_spend
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
                text: "Task Due"
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