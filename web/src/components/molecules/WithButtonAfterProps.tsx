import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { InputHTMLAttributes, SyntheticEvent } from 'react';

interface WithButtonAfterProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick: (e: SyntheticEvent) => void;
  icon: IconProp;
}

export default WithButtonAfterProps;
