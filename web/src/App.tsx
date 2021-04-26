import {
  faCheckCircle,
  faFileAlt,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Button from './components/atoms/Button';
import DoughnutChart from './components/atoms/DoughnutChart';
import BarChart from './components/atoms/BarChart';
import Select from './components/atoms/Select';
import Card from './components/molecules/Card';
import Highlight from './components/molecules/Highlight';
import Dashboard from './components/templates/Dashboard';
import DataTable from './components/atoms/DataTable';
import Header from './components/organisms/Header';

const topbar = (
  <Header
    appName="Demandas de órgãos de controle"
    name="Rubens Praser Júnior"
    lotation="GEOTR"
    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png"
  />
);

const filters = [
  <Select options={[{ name: 'teste', value: 'teste' }]} />,
  <Select options={[{ name: 'teste', value: 'teste' }]} />,
  <Select options={[{ name: 'teste', value: 'teste' }]} />,
];

const buttons = [<Button small>Cadastrar documento</Button>];

const highlights = [
  <Highlight title="Em andamento" icon={faFileAlt} color="#f6c23e">
    9
  </Highlight>,
  <Highlight title="Dentro do prazo" icon={faThumbsUp}>
    7
  </Highlight>,
  <Highlight title="Em atraso" icon={faThumbsDown} color="#e74a3b">
    2
  </Highlight>,
  <Highlight title="Respondidos" icon={faCheckCircle} color="#1cc88a">
    35
  </Highlight>,
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

const App = (): JSX.Element => (
  <Dashboard
    topbar={topbar}
    filters={filters}
    buttons={buttons}
    highlights={highlights}
    content1={card1}
    content2={card2}
    content3={card3}
  />
);

export default App;
