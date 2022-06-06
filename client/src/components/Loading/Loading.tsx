import React, { FC } from 'react';
import styled from 'styled-components';

import { SILVER_GREY } from 'config/colors';

const Loading: FC = () => (
  <Wrapper>Loading...</Wrapper>
);

const Wrapper = styled.div`
  color: ${SILVER_GREY};
`;

export default Loading;
