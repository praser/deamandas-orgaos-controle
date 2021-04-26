import { IconProp } from '@fortawesome/fontawesome-svg-core';

import React from 'react';

interface HighlightProps {
  title: string;
  icon: IconProp;
  children: React.ReactNode;
  color?: string;
}

export default HighlightProps;
