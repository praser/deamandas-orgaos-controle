import { HTMLAttributes } from 'react';

interface AvatarImageProps extends HTMLAttributes<HTMLElement> {
  src: string;
  alt: string;
}

export default AvatarImageProps;
