import React from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'features/Navigation';

import { Wrapper, Logo } from './styled';
import Language from 'features/Language';

const Header = () => (
  <Wrapper>
    <Logo>
      <Link to='/'>Local Stickerbook</Link>
    </Logo>
    <Navigation />
    <Language />
  </Wrapper>
);

export default Header;
