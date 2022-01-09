import React from 'react';

import { Title, Button, TitleWrapper } from './styled';

const PageTitle = ({ title, renderButton }) => (
  <TitleWrapper>
    {title && <Title>{title}</Title>}
    {renderButton && <Button>{renderButton()}</Button>}
  </TitleWrapper>
);

export default PageTitle;
