import React from 'react';
import styled from 'styled-components';

import { SILVER_GREY } from 'config/colors';

const Empty = () => (
  <Wrapper>No data found</Wrapper>
);

const Wrapper = styled.div`
  color: ${SILVER_GREY};
`;

export default Empty;
