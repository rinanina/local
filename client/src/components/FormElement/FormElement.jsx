import React from 'react';
import styled from 'styled-components';

const FormElement = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 22px;
  width: 100%;
  
  & > button:not(:last-child) {
    margin-right: 16px;
  }
`;

export default FormElement;
