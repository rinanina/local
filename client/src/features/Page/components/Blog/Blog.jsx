import React from 'react';

import PageWrapper from '../PageWrapper';
import Anton from './img/artist.jpg';
import { Wrapper, Image } from './styled';

const Blog = () => (
  <PageWrapper>
    <Wrapper>
      <div>Why do we use it? Text</div>
      <Image src={Anton} alt='Anton' />
    </Wrapper>
  </PageWrapper>
);

export default Blog;
