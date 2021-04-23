import React from 'react';
import DataTableComponent from 'react-data-table-component';
import DataTableProps from './DataTableProps';

const DataTable = <T,>({ columns, data }: DataTableProps<T>): JSX.Element => (
  <div data-testid="data-table">
    <DataTableComponent
      columns={columns}
      data={data}
      striped
      highlightOnHover
      dense
      pagination
      noHeader
      paginationComponentOptions={{
        rowsPerPageText: 'Linhas por página:',
        rangeSeparatorText: 'de',
        noRowsPerPage: false,
        selectAllRowsItem: false,
        selectAllRowsItemText: 'todos',
      }}
    />
  </div>
);

export default DataTable;
