import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function Chart({ levels, color, border, type }) {
  const [chartData, setChartData] = useState({});
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(i + 1);
  }
  const chart = () => {
    setChartData({
      labels: arr,
      datasets: [
        {
          label: [
            {
              display: false,
            },
          ],
          data: levels,
          backgroundColor: [`#${color}`],
          borderWidth: 2,
          borderColor: [`#${border}`],
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <Line
        data={chartData}
        options={{
          elements: {
            point: {
              radius: 0,
            },
          },
          legend: {
            display: false,
          },
          title: {
            text: `Scale of ${type} of your recently played songs`,
            display: true,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  display: false,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default Chart;
