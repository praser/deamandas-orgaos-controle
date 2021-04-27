import { HTMLAttributes } from 'react';

interface Dataset {
  backgroundColor?: string;
  data: number[];
  label?: string;
}

interface BarChartProps extends HTMLAttributes<HTMLElement> {
  labels: string[];
  datasets: Dataset[];
}

export default BarChartProps;
