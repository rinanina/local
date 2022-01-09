import React from 'react';
import styled from 'styled-components';

import { SILVER_GREY, ERROR } from 'config/colors';

const Input = ({ placeholder, id, name, type, onChange, value, defaultValue, error, ...rest }) => (
  <Wrapper>
    <Element
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      {...rest}
    />
    {error && <Error>{error}</Error>}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
`;

const Error = styled.div`
  color: ${ERROR};
  margin-top: 8px;
`;

const Element = styled.input`
  cursor: pointer;
  background-color: ${SILVER_GREY};
  border: none;
  padding: 10px;
  width: 100%;
`;

export default Input;
