import { IDataTableColumn } from 'react-data-table-component';

interface DataTableProps<T> {
  columns: IDataTableColumn[];
  data: T[];
}

export default DataTableProps;
