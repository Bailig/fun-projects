import styled, { css } from "styled-components";

export const BarChartRoot = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.blue[2]};
    border-radius: ${theme.radii}px;
    height: 229px;
    padding: ${theme.space[3]}px;
    ${theme.mediaQueries.sm} {
      height: 503px;
      padding: ${theme.space[4]}px;
    }
  `}
`;
