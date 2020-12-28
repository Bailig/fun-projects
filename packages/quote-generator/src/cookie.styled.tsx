import styled, { css } from "styled-components";

const cookieImage = {
  width: {
    downMD: 361,
    upLG: 1222,
  },

  height: {
    downMD: 382,
    upLG: 824,
  },
};

export const CookieImage = styled.img`
  position: absolute;

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        width: ${cookieImage.width.downMD}px;
        height: ${cookieImage.height.downMD}px;
      }

      ${theme.breakpoints.up("lg")} {
        width: ${cookieImage.width.upLG}px;
        height: ${cookieImage.height.upLG}px;
      }
    `}
`;

export const CookieRoot = styled.div`
  position: relative;
`;
