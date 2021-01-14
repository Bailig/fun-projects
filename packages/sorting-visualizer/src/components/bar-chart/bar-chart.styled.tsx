import styled, { css } from "styled-components";

export const BarChartRoot = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.purple};
    border-radius: 20px;

    height: 216px;
    padding: ${theme.space[3]}px;
    ${theme.mediaQueries.sm} {
      height: 352px;
      padding: ${theme.space[4]}px;
    }
    ${theme.mediaQueries.lg} {
      height: 392px;
      padding: ${theme.space[5]}px;
    }
  `}
`;
