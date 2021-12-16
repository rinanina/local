import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  font-family: Roboto;
  font-size: 16px;

  a {
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;
