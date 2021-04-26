import React from 'react';
import { Bar } from 'react-chartjs-2';
import BarChartProps from './BarChartProps';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar = ({ labels, datasets }: BarChartProps): JSX.Element => (
  <Bar data={{ labels, datasets }} options={options} />
);

export default GroupedBar;
