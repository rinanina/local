import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  font-family: Roboto;
  margin-top: 36px;
  font-size: 16px;
  
  a {
    text-decoration: none;
      
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;
