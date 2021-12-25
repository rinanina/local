import styled, { css } from 'styled-components';

import { HEADER_HEIGHT } from 'config/sizes';

export const reducerStyles = css`
  max-width: 90%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  ${reducerStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${HEADER_HEIGHT});
`;
