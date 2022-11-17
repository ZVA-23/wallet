import React from "react";
import { useSelector} from 'react-redux';
import { selectTransactionsSummary } from 'redux/selectors';
import { Chart as ChartComponent, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { setColors } from "helpers/setColors";

ChartComponent.register(ArcElement, Tooltip);

export const Chart = () => {

  const statisticsData = useSelector(selectTransactionsSummary);

  const { categoriesSummary } = statisticsData;

  const showCategoriesSummary = setColors(categoriesSummary.filter(e => e.type === "EXPENSE"));

  const doughnutChartData = {
    labels: showCategoriesSummary.map(el => el.name),
    datasets: [
      {
        data: showCategoriesSummary.map(el => -el.total),
        backgroundColor: showCategoriesSummary.map(el => el.color),
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


