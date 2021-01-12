import { GIF } from "@fun-projects/ui";
import styled, { css } from "styled-components";

export const onigiriImage = {
  duration: 3000,
};

export const OnigiriGIFRoot = styled(GIF)`
  ${({ theme }) =>
    css`
      width: 361px;
      height: 470px;

      ${theme.mediaQueries.sm} {
        width: 665px;
        height: 867px;
      }
    `}
`;
