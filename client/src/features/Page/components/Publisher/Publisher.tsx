import React, { FC } from 'react';

import PageWrapper from '../PageWrapper';
import Harley from './img/Publisher.jpg';
import { Image } from './styled';

const Publisher: FC = () => (
  <PageWrapper>
    <h1>PUBLISHER PAGE</h1>
    <Image src={Harley} alt='David' />
  </PageWrapper>
);

export default Publisher;
