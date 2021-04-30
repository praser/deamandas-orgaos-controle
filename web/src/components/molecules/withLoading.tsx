import React, { ComponentType } from 'react';
import WithLoadingProps from './withLoadingProps';
import './withLoading.css';

// eslint-disable-next-line @typescript-eslint/ban-types
const withLoading = <P extends object>(
  Component: ComponentType<P>,
): React.FC<P & WithLoadingProps> => ({
  loading,
  ...props
}: WithLoadingProps) => {
  return loading ? (
    <Component className="loading" {...(props as P)} />
  ) : (
    <Component {...(props as P)} />
  );
};

export default withLoading;
