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
      ${theme.breakpoints.down("xs")} {
        width: ${soupImage.width.downXS}px;
        height: ${soupImage.height.downXS}px;
      }

      ${theme.breakpoints.up("sm")} {
        width: ${soupImage.width.upSM}px;
        height: ${soupImage.height.upSM}px;
      }
    `}
`;
