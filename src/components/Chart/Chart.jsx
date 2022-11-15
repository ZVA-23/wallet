import React from "react";
import { Chart as ChartComponent, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


export const Chart = ({statisticsData}) => {

  ChartComponent.register(ArcElement, Tooltip);

  //   // const data = {
  //   //   labels: [
  //   //     'Red',
  //   //     'Blue',
  //   //     'Yellow'
  //   //   ],
  //   //   datasets: [{
  //   //     label: 'My First Dataset',
  //   //     data: [300, 50, 100],
  //   //     backgroundColor: [
  //   //       'rgb(255, 99, 132)',
  //   //       'rgb(54, 162, 235)',
  //   //       'rgb(255, 205, 86)'
  //   //     ],
  //   //     hoverOffset: 4
  //   //   }]
  //   // };

  //   // const config = {
  //   //   type: 'doughnut',
  //   //   data: data,
  //   // };


  const doughnutChartData = {
    labels: statisticsData.map(el => el.name),
    // [
    //   "Saudi Arabia",
    //   "Russia",
    //   "Iraq",
    //   "United Arab Emirates",
    //   "Canada"
    // ],
    datasets: [
      {
        data: statisticsData.map(el => -el.total),
        backgroundColor: [
          "#FED057",
          "#FFD8D0",
          "#FD9498",
          "#C5BAFF",
          "#808080",
          "#6E78E8",
          "#4A56E2",
          "#81E1FF",
          "#24CCA7",
          "#00AD84",
        ],
        borderColor: "black",
        borderWidth: 2
      }]
  };

  // const chartOptions = {
  //   rotation: -Math.PI,
  //   cutoutPercentage: 70,
  //   circumference: Math.PI,
  //   legend: {
  //     position: 'left',
  //     height: "200px"
  //   };

  //   // const doughnutChartData = {
  //   //   labels: ["October", "November", "December"],
  //   //   datasets: [{
  //   //     data: [8137119, 9431691, 10266674],
  //   //     label: "Infected People",
  //   //     backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600"],
  //   //     hoverBackgroundColor: ["#175000", "#003350", "#993d00"]
  //   //   }]
  // };

  return (
    <Doughnut
      type="doughnut"
      // width="288px"
      // height="288px"
      width="100%"
      height="100%"
      options={{
      cutoutPercentage: 70,
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


