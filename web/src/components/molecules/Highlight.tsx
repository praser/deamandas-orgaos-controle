import React, { FC } from 'react';
import HighlightContainer from '../atoms/HighlightContainer';
import HighlightTitle from '../atoms/HighlightTitle';
import HighlightIcon from '../atoms/HighlightIcon';
import HighlightValue from '../atoms/HighlightValue';
import HighlightProps from './HighlightProps';

const Highlight: FC<HighlightProps> = ({
  title,
  icon,
  children,
  color,
  ...rest
}) => (
  <HighlightContainer {...rest} color={color}>
    <div style={{ flex: 1 }}>
      <HighlightTitle>{title}</HighlightTitle>
      <HighlightValue>{children}</HighlightValue>
    </div>
    <HighlightIcon icon={icon} data-testid="highlight-icon" />
  </HighlightContainer>
);

export default Highlight;
