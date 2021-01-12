import styled, { css } from "styled-components";
import bowlImg from "../../assets/bowl-down-md.png";
import bowlImgLG from "../../assets/bowl-up-lg.png";
import chopsticksImg from "../../assets/chopsticks-noodles-down-md.png";
import chopsticksImgLG from "../../assets/chopsticks-noodles-up-lg.png";
import downArrowImg from "../../assets/down-arrow.gif";

const backgroundColor = "#f2ebdf";
const chopsticksImage = {
  height: {
    xs: 290,
    lg: 500,
  },
  width: {
    xs: 206,
    lg: 354,
  },
};

const bowlImage = {
  height: {
    xs: 150,
    lg: 258,
  },
  width: {
    xs: 180,
    lg: 309,
  },
};

export const ChopsticksImage = styled.div`
  background-repeat: no-repeat;

  ${({ theme }) =>
    css`
      width: ${chopsticksImage.width.xs}px;
      height: ${chopsticksImage.height.xs}px;
      background-image: url(${chopsticksImg});
      ${theme.mediaQueries.lg} {
        width: ${chopsticksImage.width.lg}px;
        height: ${chopsticksImage.height.lg}px;
        background-image: url(${chopsticksImgLG});
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
      width: ${bowlImage.width.xs}px;
      height: ${bowlImage.height.xs}px;
      background-image: url(${bowlImg});
      ${theme.mediaQueries.lg} {
        width: ${bowlImage.width.lg}px;
        height: ${bowlImage.height.lg}px;
        background-image: url(${bowlImgLG});
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

export const DownArrow = styled.div`
  width: 49px;
  height: 49px;
  background-image: url(${downArrowImg});
`;

export const ScrollMeLabel = styled.div`
  ${({ theme }) =>
    css`
      font-size: 20px;
      ${theme.mediaQueries.lg} {
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
      --top-bottom-space: calc(
        (100vh - ${chopsticksImage.height.xs}px - ${bowlImage.height.xs}px) / 2
      );

      ${theme.mediaQueries.lg} {
        --top-bottom-space: calc(
          (100vh - ${chopsticksImage.height.lg}px - ${bowlImage.height.lg}px) /
            2
        );
      }
    `}

  ${ScrollMe} {
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);

    ${({ theme }) =>
      css`
        left: calc(
          100vw / 2 + ${bowlImage.width.xs}px / 2 + ${theme.space[1]}px
        );

        ${theme.mediaQueries.lg} {
          left: calc(
            100vw / 2 + ${bowlImage.width.lg}px / 2 + ${theme.space[2]}px
          );
        }
      `}
  }
`;
