import React, { FC } from 'react';
import styled from 'styled-components';

type TProps = {
  children: JSX.Element | JSX.Element[];
};

const FormElement: FC<TProps> = ({ children }) => (
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
