import React from 'react';
import styled from 'styled-components';

import { SILVER_GREY } from 'config/colors';

const Loading = () => (
  <Wrapper>Loading...</Wrapper>
);

const Wrapper = styled.button`
  color: ${SILVER_GREY};
`;

export default Loading;
