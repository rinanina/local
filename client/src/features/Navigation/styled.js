import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  font-size: 16px;

  a {
    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;
