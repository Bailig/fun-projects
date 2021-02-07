import styled, { css } from "styled-components";
import { BarChartRoot } from "../bar-chart/bar-chart.styled";
import { Button } from "../button/button";
import { SliderRoot } from "../slider/slider.styled";

export const Headline = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 24px;
    text-align: center;
    text-transform: capitalize;

    ${theme.mediaQueries.sm} {
      font-size: 36px;
    }
  `}
`;

export const SliderLabel = styled.div`
  ${({ theme }) =>
    css`
      color: ${theme.colors.black};
      font-size: 14px;
      text-transform: capitalize;
      ${theme.mediaQueries.sm} {
        font-size: 16px;
      }
    `};
`;

export const Paper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows[0]};
    border-radius: ${theme.radii}px;
    padding: ${theme.space[2]}px;
  `}
`;

export const SliderSection = styled(Paper)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      "array-length-label array-length-slider array-length-slider"
      "slow-label speed-slider fast-label";
    align-items: center;
    row-gap: ${theme.space[3]}px;
    column-gap: ${theme.space[2]}px;

    ${SliderLabel}:nth-child (1) {
      grid-area: array-length-label;
    }
    ${SliderLabel}:nth-child(3) {
      grid-area: slow-label;
    }
    ${SliderLabel}:nth-child(5) {
      grid-area: fast-label;
    }

    ${SliderRoot}:nth-child(2) {
      grid-area: array-length-slider;
    }
    ${SliderRoot}:nth-child(4) {
      grid-area: speed-slider;
    }
  `}
`;

export const SortTypeSection = styled(Paper)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.space[2]}px;
  `}
`;

export const SortingTextRoot = styled.div`
  ${({ theme }) => css`
    span {
      display: inline-block;
      animation-name: sorting;
      animation-timing-function: ${theme.transitions.easing.easeInOut};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      text-transform: none;
    }
    span:nth-child(1) {
      text-transform: uppercase;
      animation-delay: 0.1s;
    }
    span:nth-child(2) {
      animation-delay: 0.2s;
    }
    span:nth-child(3) {
      animation-delay: 0.3s;
    }
    span:nth-child(4) {
      animation-delay: 0.4s;
    }
    span:nth-child(5) {
      animation-delay: 0.5s;
    }
    span:nth-child(6) {
      animation-delay: 0.6s;
    }
    span:nth-child(7) {
      animation-delay: 0.7s;
    }
    span:nth-child(8) {
      animation-delay: 0.8s;
    }
    span:nth-child(9) {
      animation-delay: 0.9s;
    }
    span:nth-child(10) {
      animation-delay: 1s;
    }
    @keyframes sorting {
      0% {
        transform: scale(0.9);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(0.9);
      }
    }
  `}
`;

export interface ActionSectionProps {
  showGenerateNewButton: boolean;
}

const actionAnimation = {
  generateNew: {
    from: css`
      width: 0;
      border-width: 0;
      padding-left: 0;
      padding-right: 0;
    `,
    to: css`
      width: 55%;
    `,
  },
  sort: {
    from: css`
      margin-left: 0;
    `,
  },
};

export const ActionSection = styled.div<ActionSectionProps>`
  ${({ theme, showGenerateNewButton }) => css`
    display: flex;

    ${Button}:nth-child(1) {
      white-space: nowrap;
      ${showGenerateNewButton
        ? actionAnimation.generateNew.to
        : actionAnimation.generateNew.from}
    }
    ${Button}:nth-child(2) {
      flex-grow: 1;
      margin-left: ${theme.space[2]}px;
      ${!showGenerateNewButton && actionAnimation.sort.from}
    }

    --button-padding-x: ${theme.space[2]}px;
    ${Button} {
      padding-left: var(--button-padding-x);
      padding-right: var(--button-padding-x);
    }

    ${theme.mediaQueries.sm} {
      justify-content: center;
      grid-template-columns: auto auto;
      --button-padding-x: ${theme.space[3]}px;
      max-width: 380px;
      margin-left: auto;
      margin-right: auto;
    }
    ${theme.mediaQueries.lg} {
      justify-content: stretch;
      --button-padding-x: ${theme.space[2]}px;
      max-width: none;
    }
  `}

  ${({ theme, showGenerateNewButton }) =>
    showGenerateNewButton &&
    css`
      ${Button}:nth-child(1) {
        animation-name: show-generate-new;
        animation-timing-function: ${theme.transitions.easing.easeIn};
        animation-duration: ${theme.transitions.duration.short}ms;
        @keyframes show-generate-new {
          from {
            ${actionAnimation.generateNew.from}
          }
          to {
            ${actionAnimation.generateNew.to}
          }
        }
      }

      ${Button}:nth-child(2) {
        animation-name: show-margin;
        animation-timing-function: ${theme.transitions.easing.easeIn};
        animation-duration: ${theme.transitions.duration.short}ms;
        @keyframes show-margin {
          from {
            ${actionAnimation.sort.from}
          }
        }
      }
    `}
`;

export const SortingVisualizerRoot = styled.div`
  ${({ theme }) => css`
    margin: ${theme.space[3]}px 0;
    ${BarChartRoot} {
      margin-top: 60px;
    }
    ${SliderSection} {
      margin-top: ${theme.space[2]}px;
    }
    ${SortTypeSection} {
      margin-top: ${theme.space[2]}px;
    }
    ${ActionSection} {
      margin-top: ${theme.space[4]}px;
    }

    ${theme.mediaQueries.sm} {
      margin: 64px 0;
      ${BarChartRoot} {
        margin-top: 140px;
      }
      ${SliderSection} {
        margin-top: ${theme.space[4]}px;
        height: calc(100% - ${theme.space[4]}px);
      }
      ${SortTypeSection} {
        margin-top: ${theme.space[4]}px;
      }
      ${ActionSection} {
        margin-top: ${theme.space[4]}px;
      }
    }

    ${theme.mediaQueries.lg} {
      margin: 76px 0;
      ${BarChartRoot},${SliderSection} {
        margin-top: 150px;
      }
      ${SliderSection} {
        height: auto;
      }
    }
  `}
`;
