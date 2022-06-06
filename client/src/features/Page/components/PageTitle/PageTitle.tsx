import React, { FC } from 'react';

import { Title, Button, TitleWrapper } from './styled';

type TProps = {
  title?: string;
  renderButton?: () => JSX.Element | null;
};

const PageTitle: FC<TProps> = ({ title, renderButton }) => (
  <TitleWrapper>
    {title && <Title>{title}</Title>}
    {renderButton && <Button>{renderButton()}</Button>}
  </TitleWrapper>
);

export default PageTitle;
