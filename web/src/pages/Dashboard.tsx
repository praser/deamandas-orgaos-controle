import React, { useCallback, useEffect, useState } from 'react';
import {
  faCheckCircle,
  faFileAlt,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import jwtDecode from 'jwt-decode';
import { format, parseISO } from 'date-fns';
import Button from '../components/atoms/Button';
import DoughnutChart from '../components/atoms/DoughnutChart';
import BarChart from '../components/atoms/BarChart';
import Select from '../components/atoms/Select';
import Card from '../components/molecules/Card';
import Highlight from '../components/molecules/Highlight';
import DashboardTemplate from '../components/templates/Dashboard';
import DataTable from '../components/atoms/DataTable';
import Header from '../components/organisms/Header';
import JwtPayload from '../models/jwtPayload';
import defaultPhoto from '../assets/images/profile.png';
import User from '../models/user';
import withLoading from '../components/molecules/withLoading';
import Stats from '../models/stats';
import Agency from '../models/agency';
import MonthStats from '../models/monthStats';
import Attendance from '../models/attendance';
import { DataTableColumn } from '../components/atoms/DataTableProps';

export const HighLightWithLoading = withLoading(Highlight);
export const SelectWithLoading = withLoading(Select);
export const CardWithLoading = withLoading(Card);
const appName = process.env.REACT_APP_NAME || '';
const jwtKey = process.env.REACT_APP_JWT_KEY || 'jwt';

export const getUser = (): User => {
  const jwt: string = sessionStorage.getItem(jwtKey) || '';
  const { user } = jwtDecode<JwtPayload>(jwt);
  return user;
};

export const formatDateISO = (dateISO: string): string =>
  format(parseISO(dateISO), 'dd/MM/yyyy');

export const columns: DataTableColumn[] = [
  { name: 'Órgão', selector: 'governmentAgency' },
  { name: 'Documento', selector: 'document' },
  {
    name: 'Data de emissão',
    selector: 'issuedAt',
    format: (row: Attendance): string => formatDateISO(row.issuedAt),
  },
  {
    name: 'Data de recebimento',
    selector: 'receivedAt',
    format: (row: Attendance): string => formatDateISO(row.receivedAt),
  },
  {
    name: 'Prazo para resposta',
    selector: 'deadline',
    format: (row: Attendance): string => formatDateISO(row.deadline),
  },
  { name: 'Situação', selector: 'status' },
];

const defaultStats = {
  inAttendance: 0,
  onTime: 0,
  expired: 0,
  attended: 0,
};

const defaultMonthSatats = {
  year: new Date().getFullYear(),
  months: {
    jan: defaultStats,
    fev: defaultStats,
    mar: defaultStats,
    abr: defaultStats,
    mai: defaultStats,
    jun: defaultStats,
    jul: defaultStats,
    ago: defaultStats,
    set: defaultStats,
    out: defaultStats,
    nov: defaultStats,
    dez: defaultStats,
  },
};

const formatMonthStats = (monthStats: MonthStats[]) => {
  const colors = ['#A0ECD0', '#6D98BA', '#F6D0B1', '#EE92C2', '#424874'];
  const stats = monthStats
    .sort((a, b) => (a.year <= b.year ? -1 : 1))
    .map((item, i) => ({
      backgroundColor: colors[i],
      label: item.year.toString(),
      data: [
        item.months.jan.attended,
        item.months.fev.attended,
        item.months.mar.attended,
        item.months.abr.attended,
        item.months.mai.attended,
        item.months.jun.attended,
        item.months.jul.attended,
        item.months.ago.attended,
        item.months.set.attended,
        item.months.out.attended,
        item.months.nov.attended,
        item.months.dez.attended,
      ],
    }));
  return stats;
};

const Dashboard = (): JSX.Element => {
  const [statsLoading, setStatsLoading] = useState<boolean>(false);
  const [stats, setStats] = useState<Stats[]>([defaultStats]);
  const [agenciesLoading, setAgenciesLoading] = useState<boolean>(false);
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const currentStats: Stats = stats[0];
  const [yearsLoading, setYearsLoading] = useState<boolean>(false);
  const [years, setYears] = useState<number[]>([]);
  const [monthStatsLoading, setMonthStatsLoading] = useState<boolean>(false);
  const [monthStats, setMonthStats] = useState<MonthStats[]>([
    defaultMonthSatats,
  ]);
  const [InAttendanceLoading, setInAttendanceLoading] = useState<boolean>(
    false,
  );
  const [InAttendance, setInAttendance] = useState<Attendance[]>([]);
  const { name, physicalLotationAbbreviation, photo } = getUser();

  const fetchStats = useCallback(async () => {
    setStatsLoading(true);
    const res = await fetch('http://localhost:2004/demands/stats');
    const json = (await res.json()) as Stats[];
    setStats(json);
    setStatsLoading(false);
  }, []);

  const fetchAgencies = useCallback(async () => {
    setAgenciesLoading(true);
    const res = await fetch('http://localhost:2004/agencies');
    const json = (await res.json()) as Agency[];
    setAgencies(json);
    setAgenciesLoading(false);
  }, []);

  const fetchYears = useCallback(async () => {
    setYearsLoading(true);
    const res = await fetch('http://localhost:2004/years');
    const json = (await res.json()) as number[];
    setYears(json);
    setYearsLoading(false);
  }, []);

  const fetchMonthStats = useCallback(async () => {
    setMonthStatsLoading(true);
    const res = await fetch('http://localhost:2004/demands/stats/monthly');
    const json = (await res.json()) as MonthStats[];
    setMonthStats(json);
    setMonthStatsLoading(false);
  }, []);

  const fetchInAttendance = useCallback(async () => {
    setInAttendanceLoading(true);
    const res = await fetch('http://localhost:2004/demands/in-attendance');
    const json = (await res.json()) as Attendance[];
    setInAttendance(json);
    setInAttendanceLoading(false);
  }, []);

  useEffect(() => {
    fetchStats();
    fetchAgencies();
    fetchYears();
    fetchMonthStats();
    fetchInAttendance();
  }, [
    fetchStats,
    fetchAgencies,
    fetchYears,
    fetchMonthStats,
    fetchInAttendance,
  ]);

  return (
    <DashboardTemplate
      topbar={
        <Header
          appName={appName}
          name={name}
          lotation={physicalLotationAbbreviation}
          src={photo || defaultPhoto}
        />
      }
      filters={[
        <SelectWithLoading
          loading={agenciesLoading}
          options={agencies.map(ag => ({
            name: ag.abbreviation,
            value: ag.id.toString(),
          }))}
          closeOnSelect={false}
          printOptions="on-focus"
          value={agencies.map(ag => ag.id.toString())}
          key={1}
          multiple
          search
          emptyMessage="Aguarde o carregamento da lista de órgãos de controle"
        />,
        <Select
          options={[
            { name: 'Dentro do prazo', value: 'dentroDoPrazo' },
            { name: 'Em atraso', value: 'emAtraso' },
          ]}
          closeOnSelect={false}
          printOptions="on-focus"
          value={['dentroDoPrazo', 'emAtraso']}
          key={2}
          multiple
          search
        />,
        <SelectWithLoading
          loading={yearsLoading}
          options={years.map(year => ({
            name: year.toString(),
            value: year.toString(),
          }))}
          closeOnSelect={false}
          printOptions="on-focus"
          value={[new Date().getFullYear().toString()]}
          key={3}
          search
          emptyMessage="Aguarde o carregamento da lista de anos"
        />,
      ]}
      buttons={[
        <Button small key={1}>
          Cadastrar documento
        </Button>,
      ]}
      highlights={[
        <HighLightWithLoading
          loading={statsLoading}
          title="Em andamento"
          icon={faFileAlt}
          color="#f6c23e"
          key={1}
        >
          {currentStats.inAttendance}
        </HighLightWithLoading>,
        <HighLightWithLoading
          loading={statsLoading}
          title="Dentro do prazo"
          icon={faThumbsUp}
          key={2}
        >
          {currentStats.onTime}
        </HighLightWithLoading>,
        <HighLightWithLoading
          loading={statsLoading}
          title="Em atraso"
          icon={faThumbsDown}
          color="#e74a3b"
          key={3}
        >
          {currentStats.expired}
        </HighLightWithLoading>,
        <HighLightWithLoading
          loading={statsLoading}
          title="Respondidos"
          icon={faCheckCircle}
          color="#1cc88a"
          key={4}
        >
          {currentStats.attended}
        </HighLightWithLoading>,
      ]}
      content1={
        <CardWithLoading title="Prazo de atendimento" loading={statsLoading}>
          <DoughnutChart
            data={[currentStats.expired, currentStats.onTime]}
            labels={['Em atraso', 'Dentro do prazo']}
          />
        </CardWithLoading>
      }
      content2={
        <CardWithLoading
          title="Atendimentos efetuados"
          loading={monthStatsLoading}
        >
          <BarChart
            datasets={formatMonthStats(monthStats)}
            labels={Object.keys(monthStats[0].months).map(m => m.toUpperCase())}
          />
        </CardWithLoading>
      }
      content3={
        <CardWithLoading
          title="Atendimentos em andamento"
          loading={InAttendanceLoading}
        >
          <DataTable columns={columns} data={InAttendance} />
        </CardWithLoading>
      }
    />
  );
};

export default Dashboard;
