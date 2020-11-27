import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function Chart({ levels }) {
  console.log(levels);
  const [chartData, setChartData] = useState({});
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i + 1);
  }
  console.log(levels);
  const chart = () => {
    setChartData({
      labels: arr,
      datasets: [
        {
          label: "level [0-1]",
          data: levels,
          backgroundColor: ["rgba(204, 204, 204, 0.0)"],
          borderWidth: 2,
          borderColor: ["rgba(43, 43, 43, 0.9)"],
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}

export default Chart;
