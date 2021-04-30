import { HTMLAttributes } from 'react';

interface WithLoadingProps extends HTMLAttributes<HTMLElement> {
  loading?: boolean;
}

export default WithLoadingProps;
