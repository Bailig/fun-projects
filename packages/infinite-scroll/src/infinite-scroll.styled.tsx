import styled, { css } from "styled-components";
import bowlDownMd from "./assets/bowl-down-md.png";
import bowlUpLg from "./assets/bowl-up-lg.png";
import chopsticksDownMD from "./assets/chopsticks-noodles-down-md.png";
import chopsticksUpLG from "./assets/chopsticks-noodles-up-lg.png";
import downArrowDownMD from "./assets/down-arrow-down-md.png";
import downArrowUpLG from "./assets/down-arrow-up-lg.png";

const backgroundColor = "#f2ebdf";
const chopsticksImage = {
  height: {
    downMD: 290,
    upLG: 500,
  },
  width: {
    downMD: 206,
    upLG: 354,
  },
};

const bowlImage = {
  height: {
    downMD: 150,
    upLG: 258,
  },
  width: {
    downMD: 180,
    upLG: 309,
  },
};

export const ChopsticksImage = styled.div`
  background-repeat: no-repeat;
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        width: ${chopsticksImage.width.downMD}px;
        height: ${chopsticksImage.height.downMD}px;
        background-image: url(${chopsticksDownMD});
      }

      ${theme.breakpoints.up("lg")} {
        width: ${chopsticksImage.width.upLG}px;
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
        width: ${bowlImage.width.downMD}px;
        height: ${bowlImage.height.downMD}px;
        background-image: url(${bowlDownMd});
      }

      ${theme.breakpoints.up("lg")} {
        width: ${bowlImage.width.upLG}px;
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

// TODO: use gif
export const DownArrow = styled.div`
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        width: 14px;
        height: 38px;
        background-image: url(${downArrowDownMD});
      }

      ${theme.breakpoints.up("lg")} {
        width: 26px;
        height: 70px;
        background-image: url(${downArrowUpLG});
      }
    `}
`;

export const ScrollMeLabel = styled.div`
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        font-size: 20px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 30px;
      }
    `}
`;

export const ScrollMe = styled.div`
  display: grid;
  justify-items: center;
`;

export const InfiniteScrollRoot = styled.div`
  font-family: OzCaramel;
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

  ${ScrollMe} {
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);

    ${({ theme }) =>
      css`
        ${theme.breakpoints.down("md")} {
          left: calc(100vw / 2 + ${bowlImage.width.downMD}px / 2);
        }

        ${theme.breakpoints.up("lg")} {
          left: calc(100vw / 2 + ${bowlImage.width.upLG}px / 2);
        }
      `}
  }
`;
