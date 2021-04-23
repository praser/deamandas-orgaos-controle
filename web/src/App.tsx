import React from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import DataTable from './components/atoms/DataTable';

const columns: IDataTableColumn[] = [
  { name: 'Órgao', selector: 'governmentAgency', sortable: true },
  { name: 'Documento', selector: 'document', sortable: true },
  { name: 'Data de emissão', selector: 'issuedAt', sortable: true },
  { name: 'Data de entrada', selector: 'receivedAt', sortable: true },
  { name: 'Prazo para resposta', selector: 'deadline', sortable: true },
  { name: 'Situação', selector: 'stats', sortable: true },
];

interface IData {
  governmentAgency: string;
  document: string;
  issuedAt: string;
  receivedAt: string;
  deadline: string;
  stats: string;
}

const data: IData[] = [
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
];

const App = (): JSX.Element => (
  <DataTable<IData> columns={columns} data={data} />
);

export default App;
