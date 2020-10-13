import styled, { css } from "styled-components";
import bowlDownMd from "./assets/bowl-down-md.png";
import bowlUpLg from "./assets/bowl-up-lg.png";
import chopsticksDownMD from "./assets/chopsticks-noodles-down-md.png";
import chopsticksUpLG from "./assets/chopsticks-noodles-up-lg.png";
import noodlesDownMD from "./assets/noodles-down-md.png";
import noodlesUpLG from "./assets/noodles-up-lg.png";

const backgroundColor = "#f2ebdf";
const chopsticksImage = {
  height: {
    downMD: 304,
    upLG: 510,
  },
};

const bowlImage = {
  height: {
    downMD: 153,
    upLG: 257,
  },
};

export const ChopsticksImage = styled.div`
  background-repeat: no-repeat;
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        width: 187px;
        height: ${chopsticksImage.height.downMD}px;
        background-image: url(${chopsticksDownMD});
        transform: translateX(20px);
      }

      ${theme.breakpoints.up("lg")} {
        width: 314px;
        height: ${chopsticksImage.height.upLG}px;
        background-image: url(${chopsticksUpLG});
        transform: translateX(34px);
      }
    `}
`;

export const ChopsticksImageWrapper = styled.div`
  padding-top: var(--top-bottom-space);
`;

export const ImageList = styled.div`
  display: grid;
  background-repeat: repeat-y;

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        width: 140px;
        background-image: url(${noodlesDownMD});
        grid-row-gap: ${theme.spacing(1)}px;
      }

      ${theme.breakpoints.up("lg")} {
        width: 240px;
        background-image: url(${noodlesUpLG});
        grid-row-gap: ${theme.spacing(2)}px;
      }
    `}
`;

export const BowlImage = styled.div`
  background-repeat: no-repeat;

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        width: 193px;
        height: 153px;
        background-image: url(${bowlDownMd});
      }

      ${theme.breakpoints.up("lg")} {
        width: 325px;
        height: 257px;
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

export const ImageListContainerRoot = styled.div`
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
