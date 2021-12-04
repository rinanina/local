import React from 'react';
import styled from 'styled-components';

const PageWrapper = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default PageWrapper;

const Wrapper = styled.div`
  padding: 40px 20px;
`;

