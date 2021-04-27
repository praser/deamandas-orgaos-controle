import Stats from './stats';

interface MonthStats {
  year: number;
  months: {
    jan: Stats;
    fev: Stats;
    mar: Stats;
    abr: Stats;
    mai: Stats;
    jun: Stats;
    jul: Stats;
    ago: Stats;
    set: Stats;
    out: Stats;
    nov: Stats;
    dez: Stats;
  };
}

export default MonthStats;
