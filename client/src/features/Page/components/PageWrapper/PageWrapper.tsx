import React, { FC } from 'react';

import PageTitle from '../PageTitle';
import { Wrapper } from './styled';

type TProps = {
  children: JSX.Element | JSX.Element[],
  title?: string;
  renderButton?: () => JSX.Element | null;
};

const PageWrapper: FC<TProps> = ({ children, title, renderButton }) => (
  <Wrapper>
    <PageTitle title={title} renderButton={renderButton}/>
    {children}
  </Wrapper>
);

export default PageWrapper;
