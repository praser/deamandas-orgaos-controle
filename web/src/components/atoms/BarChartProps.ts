interface Dataset {
  backgroundColor?: string;
  data: number[];
  label?: string;
}

interface BarChartProps {
  labels: string[];
  datasets: Dataset[];
}

export default BarChartProps;
