import styled, { css } from "styled-components";
import { Button } from "../button/button";
import { SliderRoot } from "../slider/slider.styled";

export const SliderLabel = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;

  ${({ theme }) =>
    css`
      color: ${theme.colors.purple};

      ${theme.mediaQueries.sm} {
        font-size: 24px;
      }
    `};
`;

export const SliderField = styled.div`
  display: grid;
  ${({ theme }) => css`
    ${theme.mediaQueries.sm} {
      row-gap: ${theme.space[0.5]}px;
    }
  `}
`;

export const SliderSection = styled.section`
  ${({ theme }) => css`
    display: grid;
    justify-content: space-between;
    row-gap: ${theme.space[3]}px;

    ${SliderRoot} {
      width: 282px;
    }

    ${SliderField}:last-of-type > ${SliderLabel} {
      ${theme.mediaQueries.sm} {
        justify-self: end;
      }
    }

    ${theme.mediaQueries.sm} {
      grid-template-columns: auto auto;
    }
  `}
`;

export const SortingVisualizerRoot = styled.div`
  font-family: "Changa", sans-serif;

  ${Button} {
    width: 100%;
  }

  ${({ theme }) => css`
    .MuiContainer-root > .MuiGrid-container {
      margin-top: ${theme.space[3]}px;
    }
  `}
`;
