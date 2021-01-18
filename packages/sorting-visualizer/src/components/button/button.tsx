import styled, { css } from "styled-components";

export interface ButtonProps {
  active?: boolean;
  disabled?: boolean;
  color?: "yellow" | "blue";
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, color = "blue" }) => css`
    text-align: center;
    text-transform: uppercase;
    border-radius: ${theme.radii}px;
    box-shadow: ${theme.shadows[1]};
    transition-duration: ${theme.transitions.duration.shorter}ms;
    background: ${theme.colors[color][2]};
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes[0]}px;
    font-weight: ${theme.fontWeights[1]};
    border: 4px solid ${theme.colors[color][2]};
    padding: ${theme.space[1] - 4}px ${theme.space[3]}px;

    ${theme.mediaQueries.sm} {
      font-size: ${theme.fontSizes[1]}px;
    }
  `}

  ${({ disabled = false, color = "blue", theme }) =>
    disabled
      ? css`
          cursor: default;
          background: ${theme.colors[color][1]};
          border: 4px solid ${theme.colors[color][1]};
          box-shadow: none;
        `
      : css`
          &:hover,
          &:active {
            background: ${theme.colors.white};
            color: ${theme.colors[color][2]};
          }

          &:active {
            box-shadow: ${theme.shadows[0]};
          }
        `}

    
  ${({
    active = false,
    disabled = false,
    color = "blue",
    theme,
  }) =>
    active &&
    css`
      cursor: default;
      background: ${theme.colors.white};
      color: ${disabled ? theme.colors[color][1] : theme.colors[color][2]};
      box-shadow: ${theme.shadows[0]};
    `}
`;
