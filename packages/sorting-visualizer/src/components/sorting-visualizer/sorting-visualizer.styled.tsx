import styled, { css } from "styled-components";
import { Button } from "../button/button";

export const Headline = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[1]};
    font-size: ${theme.fontSizes[2]}px;
    text-transform: uppercase;
    color: ${theme.colors.yellow[2]};

    ${theme.mediaQueries.sm} {
      font-size: ${theme.fontSizes[3]}px;
    }
    ${theme.mediaQueries.lg} {
      font-size: ${theme.fontSizes[4]}px;
    }
  `}
`;

export const SliderLabel = styled.div`
  ${({ theme }) =>
    css`
      font-weight: ${theme.fontWeights[0]};
      font-size: ${theme.fontSizes[0]}px;
      text-align: center;
      text-transform: uppercase;
      color: ${theme.colors.blue[2]};
      ${theme.mediaQueries.sm} {
        font-size: ${theme.fontSizes[1]}px;
      }
    `};
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    height: 1px;
    width: auto;
    background: ${theme.colors.blue[1]};
    ${theme.mediaQueries.sm} {
      width: 1px;
      height: auto;
    }
    ${theme.mediaQueries.lg} {
      height: 1px;
      width: auto;
    }
  `}
`;

export const SliderSection = styled.section`
  ${({ theme }) => css`
    display: grid;
    align-content: center;
    row-gap: ${theme.space[1]}px;
    ${Button} {
      margin-top: ${theme.space[1]}px;
    }
  `}
`;

export const ButtonSection = styled.section`
  ${({ theme }) => css`
    display: grid;
    align-content: center;
    gap: ${theme.space[2]}px;
    grid-template-columns: 1fr 1fr;

    ${theme.mediaQueries.lg} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Controls = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space[3]}px;
    background-color: ${theme.colors.blue[0]};
    border-radius: ${theme.radii}px;
    display: grid;
    gap: ${theme.space[2]}px;

    ${theme.mediaQueries.sm} {
      grid-template-columns: 1fr auto 1fr;
    }
    ${theme.mediaQueries.lg} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const SortingVisualizerRoot = styled.div`
  ${({ theme }) => css`
    font-family: "Changa", sans-serif;
    padding: ${theme.space[4]}px 0;
  `}
`;
