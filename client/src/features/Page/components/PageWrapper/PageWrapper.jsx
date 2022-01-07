import React from 'react';

import { Wrapper, Title } from './styled';

const PageWrapper = ({ children, title }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {children}
  </Wrapper>
);

export default PageWrapper;
