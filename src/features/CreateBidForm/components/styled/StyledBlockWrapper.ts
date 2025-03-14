import { BreakPoint } from 'shared/styles/style-variables';
import { styled } from 'styled-components';

export const BlockWrapper = styled.div<{ $gridArea?: string }>`
  display: flex;
  flex-direction: column;
  grid-area: ${({ $gridArea }) => $gridArea};
  width: 285px;
  height: 100%;

  @media (max-width: ${BreakPoint.MobileTop}) {
    width: 100%;
  }
`;
