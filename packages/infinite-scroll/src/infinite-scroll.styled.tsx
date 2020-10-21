import styled, { css } from "styled-components";
import bowlDownMd from "./assets/bowl-down-md.png";
import bowlUpLg from "./assets/bowl-up-lg.png";
import chopsticksDownMD from "./assets/chopsticks-noodles-down-md.png";
import chopsticksUpLG from "./assets/chopsticks-noodles-up-lg.png";

const backgroundColor = "#f2ebdf";
const chopsticksImage = {
  height: {
    downMD: 290,
    upLG: 500,
  },
};

const bowlImage = {
  height: {
    downMD: 150,
    upLG: 258,
  },
};

export const ChopsticksImage = styled.div`
  background-repeat: no-repeat;
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        width: 206px;
        height: ${chopsticksImage.height.downMD}px;
        background-image: url(${chopsticksDownMD});
      }

      ${theme.breakpoints.up("lg")} {
        width: 354px;
        height: ${chopsticksImage.height.upLG}px;
        background-image: url(${chopsticksUpLG});
      }
    `}
`;

export const ChopsticksImageWrapper = styled.div`
  padding-top: var(--top-bottom-space);
`;

export const BowlImage = styled.div`
  background-repeat: no-repeat;

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        width: 180px;
        height: ${bowlImage.height.downMD}px;
        background-image: url(${bowlDownMd});
      }

      ${theme.breakpoints.up("lg")} {
        width: 309px;
        height: ${bowlImage.height.upLG}px;
        background-image: url(${bowlUpLg});
      }
    `}
`;

export const BowlImageWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: var(--top-bottom-space);
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
`;

export const InfiniteScrollRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${backgroundColor};

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        --top-bottom-space: calc(
          (
              100vh - ${chopsticksImage.height.downMD}px -
                ${bowlImage.height.downMD}px
            ) / 2
        );
      }

      ${theme.breakpoints.up("lg")} {
        --top-bottom-space: calc(
          (
              100vh - ${chopsticksImage.height.upLG}px -
                ${bowlImage.height.upLG}px
            ) / 2
        );
      }
    `}
`;
