import { IconProp } from '@fortawesome/fontawesome-svg-core';

import React, { HTMLAttributes } from 'react';

interface HighlightProps extends HTMLAttributes<HTMLElement> {
  title: string;
  icon: IconProp;
  children: React.ReactNode;
  color?: string;
}

export default HighlightProps;
