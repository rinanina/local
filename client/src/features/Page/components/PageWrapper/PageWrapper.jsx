import React from 'react';

import { Wrapper, Title, Button, TitleWrapper } from './styled';

const PageWrapper = ({ children, title, renderButton }) => (
  <Wrapper>
    <TitleWrapper>
      {title && <Title>{title}</Title>}
      {renderButton && <Button>{renderButton()}</Button>}
    </TitleWrapper>
    {children}
  </Wrapper>
);

export default PageWrapper;
