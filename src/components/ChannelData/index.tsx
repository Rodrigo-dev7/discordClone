import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage'


import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={ messagesRef} >
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Rodrigo7"
            date="20/06/2020"
            content="hello old friend"
          />
        ))}


        <ChannelMessage
          author="Chris"
          date="22/06/2020"
          content={
            <>
              <Mention >Rodrigo </Mention>, me carrega no  CS de novo
              por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;