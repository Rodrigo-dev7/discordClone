import React from 'react'

import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotification />
      <ServerButton mentions={2} />
      <ServerButton />
      <ServerButton mentions={10}/>
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={86}/>
      <ServerButton />
    </Container>
  )
}

export default ServerList;