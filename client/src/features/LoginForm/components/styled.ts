import styled from 'styled-components';

const FORM_WIDTH = '340px';

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
