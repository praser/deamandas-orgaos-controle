import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import Button from '../atoms/Button';
import WithButtonAfterProps from './WithButtonAfterProps';

const WButton = styled(Button)`
  height: 44px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -4px;
`;

const withButtonAfter = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: StyledComponent<any, Record<string, never>>,
) => ({ icon, onClick, ...rest }: WithButtonAfterProps): JSX.Element => (
  <>
    <Component {...rest} />
    <WButton type="button" onClick={onClick} data-testid="button">
      <FontAwesomeIcon icon={icon} data-testid="icon" />
    </WButton>
  </>
);

export default withButtonAfter;
