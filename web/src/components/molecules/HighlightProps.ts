import { IconProp } from '@fortawesome/fontawesome-svg-core';

import React from 'react';

interface HighlightProps {
  title: string;
  icon: IconProp;
  children: React.ReactNode;
}

export default HighlightProps;
