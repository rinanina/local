import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 18px;
`;

export const Button = styled.button<{ isActive: boolean }>`
  text-transform: uppercase;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ isActive }) => isActive ? 'red' : 'black'};

  &:not(:last-child) {
    margin-right: 32px;
  }
`;

