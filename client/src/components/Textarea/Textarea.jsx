import React from 'react';
import styled from 'styled-components';

import { SILVER_GREY, ERROR } from 'config/colors';

const Textarea = ({ placeholder, id, name, onChange, value, defaultValue, error, ...rest }) => (
  <Wrapper>
    <Element
      id={id}
      name={name}
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

const Element = styled.textarea`
  cursor: pointer;
  background-color: ${SILVER_GREY};
  border: none;
  padding: 10px;
  width: 100%;
`;

export default Textarea;
