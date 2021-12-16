import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto;
  font-size: 18px;

  button {
    height: 22px;
    text-transform: uppercase;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;
