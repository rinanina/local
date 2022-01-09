import React from 'react';

import PageTitle from '../PageTitle';
import { Wrapper } from './styled';

const PageWrapper = ({ children, title, renderButton }) => (
  <Wrapper>
    <PageTitle title={title} renderButton={renderButton}/>
    {children}
  </Wrapper>
);

export default PageWrapper;
