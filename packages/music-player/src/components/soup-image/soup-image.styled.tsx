import { GIF } from "@fun-projects/ui";
import styled, { css } from "styled-components";

export const soupImage = {
  width: {
    downXS: 290,
    upSM: 426,
  },
  height: {
    downXS: 290,
    upSM: 426,
  },
};

export const SoupImageRoot = styled(GIF)`
  ${({ theme }) =>
    css`
      width: ${soupImage.width.downXS}px;
      height: ${soupImage.height.downXS}px;

      ${theme.mediaQueries.sm} {
        width: ${soupImage.width.upSM}px;
        height: ${soupImage.height.upSM}px;
      }
    `}
`;
