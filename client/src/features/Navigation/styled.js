import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    text-decoration: none;
      
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;
