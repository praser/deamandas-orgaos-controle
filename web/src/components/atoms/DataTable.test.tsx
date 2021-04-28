import React from 'react';
import { render, screen } from '@testing-library/react';
import { IDataTableColumn } from 'react-data-table-component';
import DataTable from './DataTable';
import Attendance from '../../models/attendance';

const columns: IDataTableColumn[] = [
  { name: 'Órgao', selector: 'governmentAgency', sortable: true },
  { name: 'Documento', selector: 'document', sortable: true },
  { name: 'Data de emissão', selector: 'issuedAt', sortable: true },
  { name: 'Data de entrada', selector: 'receivedAt', sortable: true },
  { name: 'Prazo para resposta', selector: 'deadline', sortable: true },
  { name: 'Situação', selector: 'status', sortable: true },
];

const data: Attendance[] = [
  {
    governmentAgency: 'lorem',
    document: 'lorem',
    issuedAt: 'lorem',
    receivedAt: 'lorem',
    deadline: 'lorem',
    status: 'lorem',
  },
];

describe('DataTable component', () => {
  let datatable: HTMLElement | null;
  const testId = 'data-table';

  beforeEach(() => {
    render(<DataTable<Attendance> columns={columns} data={data} />);
    datatable = screen.queryByTestId(testId);
  });

  it('is expected to be in the screen', () => {
    expect(datatable).not.toBeNull();
  });
});
