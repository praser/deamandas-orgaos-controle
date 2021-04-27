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

const HighLightWithLoading = withLoading(Highlight);
const SelectWithLoading = withLoading(Select);

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

const filters = [
  <Select options={[{ name: 'teste', value: 'teste' }]} key={1} />,
  <Select options={[{ name: 'teste', value: 'teste' }]} key={2} />,
  <Select options={[{ name: 'teste', value: 'teste' }]} key={3} />,
];

const buttons = [
  <Button small key={1}>
    Cadastrar documento
  </Button>,
];

const card1 = (
  <Card title="Prazo de atendimento">
    <DoughnutChart data={[23, 15]} labels={['Em atrazo', 'Dentro do prazo']} />
  </Card>
);

const card2 = (
  <Card title="Atendimentos efetuados">
    <BarChart
      datasets={[
        { label: '2019', data: [5, 7, 8, 6] },
        { label: '2020', data: [4, 5, 9, 3] },
        { label: '2021', data: [3, 3, 2, 6] },
      ]}
      labels={['JAN', 'FEV', 'MAR', 'ABR']}
    />
  </Card>
);

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
  year: 0,
  inAttendence: 0,
  onTime: 0,
  expired: 0,
  attended: 0,
};

const Dashboard = (): JSX.Element => {
  const [statsLoading, setStatsLoading] = useState<boolean>(false);
  const [stats, setStats] = useState<Stats[]>([defaultStats]);
  const [agenciesLoading, setAgenciesLoading] = useState<boolean>(false);
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const currentStats: Stats = stats[0];
  const [yearsLoading, setYearsLoading] = useState<boolean>(false);
  const [years, setYears] = useState<number[]>([]);

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

  useEffect(() => {
    fetchStats();
    fetchAgencies();
    fetchYears();
  }, [fetchStats, fetchAgencies, fetchYears]);

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
      content1={card1}
      content2={card2}
      content3={card3}
    />
  );
};

export default Dashboard;
