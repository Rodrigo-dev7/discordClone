import React from 'react';

import {
  Container, Profile, Avatar, UserData,
  Icons, MicIcon, Headphone, SettingsIcon
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
            <strong>Rodrigo7</strong>
            <span>#3420</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <Headphone />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo;