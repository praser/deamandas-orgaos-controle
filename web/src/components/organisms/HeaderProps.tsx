import { HTMLAttributes } from 'react';
import ProfileProps from './ProfileProps';

interface HeaderProps extends ProfileProps, HTMLAttributes<HTMLDivElement> {
  appName: string;
}

export default HeaderProps;
