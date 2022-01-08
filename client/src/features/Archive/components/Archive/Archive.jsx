import React  from 'react';

import main from 'assets/main.png';

import { Wrapper, Item, Image, Title } from './styled';

const Archive = () => (
  <Wrapper>
    <Item>
      <Image src={main} alt='Local Stickerbook 2'/>
      <Title>Local Stickerbook #2</Title>
    </Item>
    <Item>
      <Image src={main} alt='Local Stickerbook 1'/>
      <Title>Local Stickerbook #1</Title>
    </Item>
  </Wrapper>
);

export default Archive;
