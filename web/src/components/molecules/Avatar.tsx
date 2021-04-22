import React from 'react';
import AvatarContainer from '../atoms/AvatarContainer';
import AvatarImage from '../atoms/AvatarImage';
import AvatarProps from './AvatarProps';

const Avatar = ({ src }: AvatarProps): JSX.Element => (
  <AvatarContainer data-testid="avatar">
    <AvatarImage src={src} alt="avatar" />
  </AvatarContainer>
);

export default Avatar;
