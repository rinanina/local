import React from 'react';
import styled from 'styled-components';

import { SILVER_GREY } from 'config/colors';

const Button = ({ onClick, text, disabled = false, fullWidth = false }) => (
  <Wrapper onClick={onClick} disabled={disabled} fullWidth={fullWidth}>{text}</Wrapper>
);

const Wrapper = styled.button`
  cursor: pointer;
  background-color: ${SILVER_GREY};
  border: none;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  padding: 10px;
`;

export default Button;
