import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { InputHTMLAttributes, SyntheticEvent } from 'react';
import styled, { StyledComponent } from 'styled-components';
import Button from '../atoms/Button';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick: (e: SyntheticEvent) => void;
  icon: IconProp;
}

const WButton = styled(Button)`
  height: 44px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -4px;
`;

const withButtonAfter = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: StyledComponent<any, Record<string, never>>,
) => ({ icon, onClick, ...rest }: IProps): JSX.Element => (
  <>
    <Component {...rest} />
    <WButton type="button" onClick={onClick} data-testid="button">
      <FontAwesomeIcon icon={icon} data-testid="icon" />
    </WButton>
  </>
);

export default withButtonAfter;
