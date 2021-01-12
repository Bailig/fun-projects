import { GIF } from "@fun-projects/ui";
import styled, { css } from "styled-components";

export const soupImage = {
  width: {
    xs: 290,
    sm: 426,
  },
  height: {
    xs: 290,
    sm: 426,
  },
};

export const SoupImageRoot = styled(GIF)`
  ${({ theme }) =>
    css`
      width: ${soupImage.width.xs}px;
      height: ${soupImage.height.xs}px;

      ${theme.mediaQueries.sm} {
        width: ${soupImage.width.sm}px;
        height: ${soupImage.height.sm}px;
      }
    `}
`;
