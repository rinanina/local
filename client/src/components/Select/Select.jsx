import React from 'react';
import styled from 'styled-components';

import { SILVER_GREY } from 'config/colors';

const Select = ({ name, onChange, options, selected }) => (
  <Wrapper name={name} onChange={onChange}>
    {options.map((item) => <option key={item} value={item} selected={item === selected}>{item}</option>)}
  </Wrapper>
);

const Wrapper = styled.select`
  cursor: pointer;
  background-color: ${SILVER_GREY};
  border: none;
  width: 100%;
  padding: 10px;
`;

export default Select;
