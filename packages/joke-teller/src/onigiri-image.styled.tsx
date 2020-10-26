import { GIF } from "@fun-projects/ui";
import styled, { css } from "styled-components";

export const onigiriImage = {
  duration: 3000,
};

export const OnigiriGIFRoot = styled(GIF)`
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        width: 361px;
        height: 470px;
      }

      ${theme.breakpoints.up("sm")} {
        width: 665px;
        height: 867px;
      }
    `}
`;
