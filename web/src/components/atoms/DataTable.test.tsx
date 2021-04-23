import React from 'react';
import { render, screen } from '@testing-library/react';
import { IDataTableColumn } from 'react-data-table-component';
import DataTable from './DataTable';

interface IData {
  governmentAgency: string;
  document: string;
  issuedAt: string;
  receivedAt: string;
  deadline: string;
  stats: string;
}

const columns: IDataTableColumn[] = [
  { name: 'Órgao', selector: 'governmentAgency', sortable: true },
  { name: 'Documento', selector: 'document', sortable: true },
  { name: 'Data de emissão', selector: 'issuedAt', sortable: true },
  { name: 'Data de entrada', selector: 'receivedAt', sortable: true },
  { name: 'Prazo para resposta', selector: 'deadline', sortable: true },
  { name: 'Situação', selector: 'stats', sortable: true },
];

const data: IData[] = [
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    stats: 'lorem',
  },
];

describe('DataTable component', () => {
  let datatable: HTMLElement | null;
  const testId = 'data-table';

  beforeEach(() => {
    render(<DataTable<IData> columns={columns} data={data} />);
    datatable = screen.queryByTestId(testId);
  });

  it('is expected to be in the screen', () => {
    expect(datatable).not.toBeNull();
  });
});
