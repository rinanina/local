import React from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'features/Navigation';

import { Wrapper, Title } from './styled';

const Header = () => (
    <Wrapper>
        <Title>
            <Link to='/'>Local Stickerbook</Link>
        </Title>
        <Navigation />
    </Wrapper>
);

export default Header;

