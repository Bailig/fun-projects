import {
  ProgressBar as ProgressBarBase,
  ProgressBarProgress,
} from "@fun-projects/ui";
import styled, { css } from "styled-components";
import chopstick from "../../assets/chopstick.svg";
import nextUpSM from "../../assets/next-up-sm.png";
import nextXS from "../../assets/next-xs.png";
import pauseUpSM from "../../assets/pause-up-sm.png";
import pauseXS from "../../assets/pause-xs.png";
import playUpSM from "../../assets/play-up-sm.png";
import playXS from "../../assets/play-xs.png";
import previousUpSM from "../../assets/previous-up-sm.png";
import previousXS from "../../assets/previous-xs.png";
import { soupImage } from "../soup-image/soup-image.styled";

export const MusicName = styled.a`
  font-weight: 500;

  ${({ theme }) =>
    css`
      font-size: 20px;

      ${theme.mediaQueries.sm} {
        font-size: 38px;
      }
    `}
`;

export const AuthorName = styled.div`
  font-weight: 300;

  ${({ theme }) =>
    css`
      font-size: 14px;

      ${theme.mediaQueries.sm} {
        font-size: 22px;
      }
    `}
`;

interface MusicControlBaseStyleProps {
  disabled: boolean;
}

const musicControlBaseStyle = ({ disabled }: MusicControlBaseStyleProps) => css`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
    filter: none;
  }
  ${disabled
    ? css`
        opacity: 0.3;
        cursor: default;
      `
    : css`
        &:hover {
          filter: drop-shadow(0px 4px 4px #ffc700);
        }
      `}
`;

const previousNextButtonSize = css`
  ${({ theme }) =>
    css`
      width: 28px;
      height: 24px;

      ${theme.mediaQueries.sm} {
        width: 40px;
        height: 35px;
      }
    `}
`;

interface PlayButtonProps extends MusicControlBaseStyleProps {
  playing: boolean;
}

export const PlayButton = styled.button<PlayButtonProps>`
  ${musicControlBaseStyle}
  ${({ theme, playing }) =>
    css`
      width: 55px;
      height: 49px;
      background-image: url(${playing ? pauseXS : playXS});

      ${theme.mediaQueries.sm} {
        width: 81px;
        height: 71px;
        background-image: url(${playing ? pauseUpSM : playUpSM});
      }
    `}
`;

export const PreviousButton = styled.button<MusicControlBaseStyleProps>`
  ${musicControlBaseStyle}
  ${previousNextButtonSize}
  ${({ theme }) =>
    css`
      background-image: url(${previousXS});

      ${theme.mediaQueries.sm} {
        background-image: url(${previousUpSM});
      }
    `}
`;

export const NextButton = styled.button<MusicControlBaseStyleProps>`
  ${musicControlBaseStyle}
  ${previousNextButtonSize}
  ${({ theme }) =>
    css`
      background-image: url(${nextXS});

      ${theme.mediaQueries.sm} {
        background-image: url(${nextUpSM});
      }
    `}
`;

export const MusicNumber = styled.div`
  color: #4ebf4b;

  ${({ theme }) =>
    css`
      font-size: 14px;

      ${theme.mediaQueries.sm} {
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
      margin-right: -${theme.space[2]}px;
    }
    ${NextButton} {
      z-index: 100;
      margin-left: -${theme.space[2]}px;
    }
  `}
`;

export const MusicPlayerSoupRoot = styled.div`
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

      ${theme.mediaQueries.sm} {
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

export const ProgressLabel = styled.div`
  ${({ theme }) =>
    css`
      font-size: 14px;

      ${theme.mediaQueries.sm} {
        font-size: 18px;
      }
    `}
`;

export const progressBar = {
  width: {
    downXS: 262,
    upSM: 388,
  },
  height: {
    downXS: 8,
    upSM: 11,
  },
};

export const ProgressBar = styled(ProgressBarBase)`
  clip-path: polygon(0 0, 100% 25%, 100% 75%, 0% 100%);
  background-color: #c9b9a9;

  ${({ theme }) =>
    css`
      width: ${progressBar.width.downXS}px;
      height: ${progressBar.height.downXS}px;

      ${theme.mediaQueries.sm} {
        width: ${progressBar.width.upSM}px;
        height: ${progressBar.height.upSM}px;
      }
    `}

  ${ProgressBarProgress} {
    background-color: #805034;
  }
`;

export const chopstickImage = {
  width: {
    downXS: 260,
    upSM: 388,
  },
  height: {
    downXS: 53,
    upSM: 83,
  },
};

export const ChopstickImage = styled.div`
  background-image: url(${chopstick});
  background-size: contain;
  background-repeat: no-repeat;

  ${({ theme }) =>
    css`
      width: ${chopstickImage.width.downXS}px;
      height: ${chopstickImage.height.downXS}px;

      ${theme.mediaQueries.sm} {
        width: ${chopstickImage.width.upSM}px;
        height: ${chopstickImage.height.upSM}px;
      }
    `}
`;

export const MusicPlayerRoot = styled.div`
  background: #f2ebdf;
  color: #ffc700;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${ProgressLabel} {
    display: flex;
    justify-content: space-between;

    ${({ theme }) =>
      css`
        width: ${progressBar.width.downXS}px;

        ${theme.mediaQueries.sm} {
          width: ${progressBar.width.upSM}px;
        }
      `}
  }
`;
