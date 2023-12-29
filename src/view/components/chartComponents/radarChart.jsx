import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = () => {

    const data = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,0,0,0.2)',
                borderColor: 'rgba(255,0,0,1)',
                pointBackgroundColor: 'rgba(255,0,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,0,0,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(155,38,182,0.2)',
                borderColor: 'rgba(155,38,182,1)',
                pointBackgroundColor: 'rgba(155,38,182,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(155,38,182,1)',
                data: [28, 48, 40, 19, 96, 27, 100]

            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Radar Chart'
        }
    };

    return (
        <div className="flex justify-center items-center w-full h-[300px]">
            <Radar data={data} options={options} />
        </div>
    )
}

export default RadarChart;