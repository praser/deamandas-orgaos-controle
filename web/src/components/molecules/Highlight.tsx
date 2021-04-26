import React from 'react';
import HighlightContainer from '../atoms/HighlightContainer';
import HighlightTitle from '../atoms/HighlightTitle';
import HighlightIcon from '../atoms/HighlightIcon';
import HighlightValue from '../atoms/HighlightValue';
import HighlightProps from './HighlightProps';

const Highlight = ({
  title,
  icon,
  children,
  color,
}: HighlightProps): JSX.Element => (
  <HighlightContainer data-testid="highlight" color={color}>
    <div style={{ flex: 1 }}>
      <HighlightTitle>{title}</HighlightTitle>
      <HighlightValue>{children}</HighlightValue>
    </div>
    <HighlightIcon icon={icon} data-testid="highlight-icon" />
  </HighlightContainer>
);

export default Highlight;
