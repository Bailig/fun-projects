import styled, { css } from "styled-components";

export interface ButtonProps {
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 20px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;

  ${({ theme }) => css`
    box-shadow: ${theme.shadows[1]};
    transition-duration: ${theme.transitions.duration.shorter}ms;
    padding: ${theme.space[1]}px ${theme.space[3]}px;
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes[1]}px;

    &:active {
      box-shadow: ${theme.shadows[0]};
    }
    &:hover {
      background: ${theme.colors.yellow};
    }

    ${theme.mediaQueries.sm} {
      font-size: ${theme.fontSizes[3]}px;
    }
  `}

  ${({ active, theme }) =>
    active &&
    css`
      background: ${theme.colors.yellow};
      box-shadow: ${theme.shadows[0]};
    `}
`;
