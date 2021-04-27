import React, { useCallback, useEffect, useState } from 'react';
import {
  faCheckCircle,
  faFileAlt,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import jwtDecode from 'jwt-decode';
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

const HighLightWithLoading = withLoading(Highlight);
const SelectWithLoading = withLoading(Select);
const CardWithLoading = withLoading(Card);

const getUser = (): User => {
  const jwtKey = process.env.REACT_APP_JWT_KEY || '';
  const jwt: string = sessionStorage.getItem(jwtKey) || '';
  const { user } = jwtDecode<JwtPayload>(jwt);
  return user;
};

const TopBar = (): JSX.Element => {
  const appName = process.env.REACT_APP_NAME || '';
  const { name, physicalLotationAbbreviation, photo } = getUser();
  return (
    <Header
      appName={appName}
      name={name}
      lotation={physicalLotationAbbreviation}
      src={photo || defaultPhoto}
    />
  );
};

const buttons = [
  <Button small key={1}>
    Cadastrar documento
  </Button>,
];

const data = [
  {
    governmentAgency: 'OGU',
    document: '001/2021',
    issuedAt: '2021-04-16',
    receivedAt: '2021-04-18',
    deadline: '2021-04-30',
    status: 'Aguardando dados da GIGOV',
  },
  {
    governmentAgency: 'OGU',
    document: '001/2021',
    issuedAt: '2021-04-16',
    receivedAt: '2021-04-18',
    deadline: '2021-04-30',
    status: 'Aguardando dados da GIGOV',
  },
  {
    governmentAgency: 'OGU',
    document: '001/2021',
    issuedAt: '2021-04-16',
    receivedAt: '2021-04-18',
    deadline: '2021-04-30',
    status: 'Aguardando dados da GIGOV',
  },
];

const columns = [
  { name: 'Órgão', selector: 'governmentAgency' },
  { name: 'Documento', selector: 'document' },
  { name: 'Data de emissão', selector: 'issuedAt' },
  { name: 'Data de recebimento', selector: 'receivedAt' },
  { name: 'Prazo para resposta', selector: 'deadline' },
  { name: 'Situação', selector: 'status' },
];
const card3 = (
  <Card title="Atendimentos em andamento">
    <DataTable columns={columns} data={data} />
  </Card>
);

const defaultStats = {
  inAttendence: 0,
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

  useEffect(() => {
    fetchStats();
    fetchAgencies();
    fetchYears();
    fetchMonthStats();
  }, [fetchStats, fetchAgencies, fetchYears, fetchMonthStats]);

  return (
    <DashboardTemplate
      topbar={<TopBar />}
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
      buttons={buttons}
      highlights={[
        <HighLightWithLoading
          loading={statsLoading}
          title="Em andamento"
          icon={faFileAlt}
          color="#f6c23e"
          key={1}
        >
          {currentStats.inAttendence}
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
      content3={card3}
    />
  );
};

export default Dashboard;
