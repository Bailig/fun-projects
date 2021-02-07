import styled, { css } from "styled-components";

export const BarChartRoot = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    border-radius: ${theme.radii}px;
    height: 136px;
    padding: ${theme.space[3]}px;
    padding-top: 0;
    box-shadow: ${theme.shadows[0]};

    --exceed-top: 34px;
    svg {
      position: absolute;
      top: calc(var(--exceed-top) * -1);
      bottom: 0;
      left: 0;
      right: 0;
    }

    ${theme.mediaQueries.sm} {
      height: 300px;
      padding: ${theme.space[4]}px;
      --exceed-top: 74px;
    }

    ${theme.mediaQueries.lg} {
      height: 380px;
      padding: ${theme.space[5]}px;
      --exceed-top: 92px;
    }
  `}
`;
