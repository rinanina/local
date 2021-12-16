import React from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'features/Navigation';

import { Wrapper, Title } from './styled';
import Language from 'features/Language/Language';

const Header = () => (
  <Wrapper>
    <Title>
      <Link to='/'>Local Stickerbook</Link>
    </Title>
    <Navigation />
    <Language />
  </Wrapper>
);

export default Header;
