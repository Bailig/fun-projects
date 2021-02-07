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

export interface ActionSectionProps {
  showGenerateNewButton: boolean;
}

export const ActionSection = styled.div<ActionSectionProps>`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: ${theme.space[2]}px;

    --button-padding-x: ${theme.space[2]}px;
    ${Button} {
      padding-left: var(--button-padding-x);
      padding-right: var(--button-padding-x);
    }

    ${theme.mediaQueries.sm} {
      justify-content: center;
      grid-template-columns: auto auto;
      --button-padding-x: ${theme.space[3]}px;
    }
    ${theme.mediaQueries.lg} {
      justify-content: stretch;
      grid-template-columns: 3fr 2fr;
      --button-padding-x: ${theme.space[2]}px;
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
