import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 880px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 0 24px;
  margin-bottom: 24px;
  max-width: 440px;
`;

export const Title = styled.h3`
  font-size: 22px;
  line-height: 24px;
  padding-top: 16px;
`;

export const Image = styled.img`
  max-width: 400px;
`;
