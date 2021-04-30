import React from 'react';

import { Doughnut } from 'react-chartjs-2';
import DoughnutChartProps from './DoughnutChartProps';

const layout = {
  padding: { left: 10, right: 25, top: 25, bottom: 0 },
};

export const options = {
  maintainAspectRatio: true,
  layout,
  legend: { display: false },
};

export const datasetAssembler = ({ labels, data }: DoughnutChartProps) => ({
  labels,
  datasets: [
    {
      data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 4,
    },
  ],
});

const DoughnutChart = (props: DoughnutChartProps): JSX.Element => (
  <Doughnut data={datasetAssembler(props)} options={options} />
);

export default DoughnutChart;
