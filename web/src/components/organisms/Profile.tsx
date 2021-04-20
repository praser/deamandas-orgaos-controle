import React from 'react';
import ProfileContainer from '../atoms/ProfileContainer';
import UserLotation from '../atoms/UserLotation';
import Username from '../atoms/Username';
import Avatar from '../molecules/Avatar';

interface Props {
  name: string;
  lotation: string;
  src: string;
}

const Profile = ({ name, lotation, src }: Props): JSX.Element => {
  const firstName = (fullName: string): string => fullName.split(' ')[0];

  return (
    <ProfileContainer data-testid="profile">
      <div style={{ marginRight: '8px' }}>
        <Username data-testid="username">{firstName(name)}</Username>
        <UserLotation>{lotation}</UserLotation>
      </div>
      <Avatar src={src} />
    </ProfileContainer>
  );
};

export default Profile;
