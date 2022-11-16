import React from "react";
import { Chart as ChartComponent, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartComponent.register(ArcElement, Tooltip);

export const Chart = ({ statisticsData }) => {
  console.log(statisticsData);

  const doughnutChartData = {
    labels: statisticsData.map(el => el.name),
    datasets: [
      {
        data: statisticsData.map(el => -el.total),
        backgroundColor: statisticsData.map(el => el.color),
        borderColor: "black",
        borderWidth: 2,
      }]
  };

  return (
    <Doughnut
      type="doughnut"
      // width="288px"
      // height="288px"
      width="100%"
      height="100%"
      options={{
        cutout: 80,
        // radius: 144,
        legend: {
          display: true,
          position: 'right',
          height: "200px"
        },
        animation: {
          animateRotate: true,
          animateScale: true
        },
        title: {
          display: true,
          text: "Statistics",
          fontSize: 15
        },
      }}
      data={doughnutChartData}
    />
  )

}


