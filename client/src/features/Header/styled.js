import styled from 'styled-components';

import { HEADER_HEIGHT } from 'config/sizes';
import { reducerStyles } from 'features/Page';

export const Wrapper = styled.header`
  ${reducerStyles};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HEADER_HEIGHT};
`;

export const Logo = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  a {
    color: black;
  }
`;
