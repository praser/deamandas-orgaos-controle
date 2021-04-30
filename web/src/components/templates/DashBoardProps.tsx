import { HTMLAttributes } from 'react';

interface DashBoardProps extends HTMLAttributes<HTMLDivElement> {
  topbar: any;
  filters: any[];
  buttons: any[];
  highlights: any[];
  content1: any;
  content2: any;
  content3: any;
}

export default DashBoardProps;
