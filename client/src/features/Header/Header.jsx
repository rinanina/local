import React from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'features/Navigation';
import Language from 'features/Language';
import LogoutBtn from 'features/Logout';
import { useAuth } from 'context/AuthContext';

import { Wrapper, Logo } from './styled';

const Header = () => {
  const { isAuth } = useAuth();

  return (
    <Wrapper>
      <Logo>
        <Link to='/'>Local Stickerbook</Link>
      </Logo>
      <Navigation />
      <Language />
      {isAuth && <LogoutBtn />}
    </Wrapper>
  );
};

export default Header;
