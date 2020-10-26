import styled, { css } from "styled-components";
import nextUpSM from "./assets/next-up-sm.png";
import nextXS from "./assets/next-xs.png";
import pauseUpSM from "./assets/pause-up-sm.png";
import pauseXS from "./assets/pause-xs.png";
import playUpSM from "./assets/play-up-sm.png";
import playXS from "./assets/play-xs.png";
import previousUpSM from "./assets/previous-up-sm.png";
import previousXS from "./assets/previous-xs.png";
import { soupImage } from "./soup-image.styled";

export const MusicName = styled.a`
  font-weight: 500;

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        font-size: 20px;
      }

      ${theme.breakpoints.up("sm")} {
        font-size: 38px;
      }
    `}
`;

export const AuthorName = styled.div`
  font-weight: 300;

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${theme.breakpoints.up("sm")} {
        font-size: 22px;
      }
    `}
`;

export const ProgressLabel = styled.div`
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${theme.breakpoints.up("sm")} {
        font-size: 18px;
      }
    `}
`;

const musicControlEffects = css`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
    filter: none;
  }
  &:hover {
    filter: drop-shadow(0px 4px 4px #ffc700);
  }
`;

const previousNextButtonSize = css`
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        width: 28px;
        height: 24px;
      }

      ${theme.breakpoints.up("sm")} {
        width: 40px;
        height: 35px;
      }
    `}
`;

export const PlayButton = styled.button<{ isPlaying: boolean }>`
  ${musicControlEffects}
  ${({ theme, isPlaying }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        width: 55px;
        height: 49px;
        background-image: url(${isPlaying ? pauseXS : playXS});
      }

      ${theme.breakpoints.up("sm")} {
        width: 81px;
        height: 71px;
        background-image: url(${isPlaying ? pauseUpSM : playUpSM});
      }
    `}
`;

export const PreviousButton = styled.button`
  ${musicControlEffects}
  ${previousNextButtonSize}
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        background-image: url(${previousXS});
      }

      ${theme.breakpoints.up("sm")} {
        background-image: url(${previousUpSM});
      }
    `}
`;

export const NextButton = styled.button`
  ${musicControlEffects}
  ${previousNextButtonSize}
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        background-image: url(${nextXS});
      }

      ${theme.breakpoints.up("sm")} {
        background-image: url(${nextUpSM});
      }
    `}
`;

export const MusicNumber = styled.div`
  color: #4ebf4b;

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${theme.breakpoints.up("sm")} {
        font-size: 18px;
      }
    `}
`;

export const MusicControls = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: end;
  justify-content: center;

  ${({ theme }) => css`
    ${PreviousButton} {
      z-index: 100;
      margin-right: -${theme.spacing(2)}px;
    }
    ${NextButton} {
      z-index: 100;
      margin-left: -${theme.spacing(2)}px;
    }
  `}
`;

export const MusicContent = styled.div`
  position: relative;

  ${MusicNumber}, ${MusicName}, ${MusicControls}, ${AuthorName} {
    position: absolute;
  }

  ${MusicName}, ${MusicControls}, ${AuthorName} {
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        width: ${soupImage.width.downXS}px;
        height: ${soupImage.height.downXS}px;

        ${MusicNumber} {
          top: 88px;
          left: 76px;
        }
        ${MusicName} {
          top: 127px;
        }
        ${MusicControls} {
          top: 186px;
        }
        ${AuthorName} {
          top: 154px;
        }
      }

      ${theme.breakpoints.up("sm")} {
        width: ${soupImage.width.upSM}px;
        height: ${soupImage.height.upSM}px;

        ${MusicNumber} {
          top: 129px;
          left: 112px;
        }
        ${MusicName} {
          top: 185px;
        }
        ${MusicControls} {
          top: 278px;
        }
        ${AuthorName} {
          top: 230px;
        }
      }
    `}
`;

export const MusicPlayerRoot = styled.div`
  background: #f2ebdf;
  color: #ffc700;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
