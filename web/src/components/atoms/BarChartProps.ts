import { HTMLAttributes } from 'react';

export interface Dataset {
  backgroundColor?: string;
  data: number[];
  label?: string;
}

interface BarChartProps extends HTMLAttributes<HTMLElement> {
  labels: string[];
  datasets: Dataset[];
}

export default BarChartProps;
