import React, { FC } from 'react';

import main from 'assets/main.png';

import PageWrapper from '../PageWrapper';
import { Content, Image, Description, DescriptionInner } from './styled';

const Home: FC = () => (
  <PageWrapper>
    <Content>
      <Image src={main} alt='Main image'/>
      <Description>
        <DescriptionInner>
          The actual catalogue of visual archives represents a caleidoscopic flow of metamodernistic visions,
          routine manifesto of everydayness and vertigo of devalued meanings. It’s an ever-present grotesque
          of surrounding reality transferring beauty from yesterday’s tomorrow towards today’s future.
        </DescriptionInner>
      </Description>
    </Content>
  </PageWrapper>
);

export default Home;
