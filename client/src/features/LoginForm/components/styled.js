import styled, { css } from 'styled-components';

import { SILVER_GREY } from 'config/colors';

const FORM_WIDTH = '340px';

const formElementStyles = css`
  background-color: ${SILVER_GREY};
  border: none;
  width: 100%;
  padding: 10px;
  
  &:not(:last-child) {
    margin-bottom: 22px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${FORM_WIDTH};
`;

export const Input = styled.input`
  ${formElementStyles};
`;

export const Button = styled.button`
  ${formElementStyles};
  cursor: pointer;
`;


