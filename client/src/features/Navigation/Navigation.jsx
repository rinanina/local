import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './styled';

const Header = () => (
  <Wrapper>
    <Link to='/archive'>ARCHIVE </Link>
    <Link to='/artists'>ARTISTS</Link>
    <Link to='/blog'>BLOG </Link>
    <Link to='/contact'>CONTACT </Link>
    <Link to='/publisher'>PUBLISHER </Link>
  </Wrapper>
);

export default Header;

