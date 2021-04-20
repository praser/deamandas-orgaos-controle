import React from 'react';
import AvatarContainer from '../atoms/AvatarContainer';
import AvatarImage from '../atoms/AvatarImage';

interface Props {
  src: string;
}

const Avatar = ({ src }: Props): JSX.Element => (
  <AvatarContainer data-testid="avatar">
    <AvatarImage src={src} alt="avatar" />
  </AvatarContainer>
);

export default Avatar;
