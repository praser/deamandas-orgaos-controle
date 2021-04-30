import { IDataTableColumn } from 'react-data-table-component';

export type DataTableColumn = IDataTableColumn;

interface DataTableProps<T> {
  columns: DataTableColumn[];
  data: T[];
}

export default DataTableProps;
