import styled, { css } from "styled-components";

export interface ButtonProps {
  active?: boolean;
  disabled?: boolean;
  color?: "white" | "primary";
  variant?: "outlined" | "contained";
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, color = "primary", variant = "contained" }) => css`
    text-align: center;
    text-transform: capitalize;
    border-radius: ${theme.radii}px;
    box-shadow: ${theme.button.shadows.default};
    transition-duration: ${theme.transitions.duration.shorter}ms;
    background: ${theme.colors[color]};
    padding: ${theme.space[1]}px ${theme.space[2]}px;
    border: 2px solid ${theme.colors[color]};
    font-size: 18px;
    &:hover {
      box-shadow: ${theme.button.shadows.hover};
    }

    ${color === "primary"
      ? css`
          font-weight: 900;
          color: ${theme.colors.white};
        `
      : css`
          font-weight: 600;
          color: ${theme.colors.primary};
        `}

    ${variant === "outlined" &&
    css`
      border-color: ${color === "white"
        ? theme.colors.primary
        : theme.colors.white};
    `}
  `}

  ${({ disabled = false, theme }) =>
    disabled &&
    css`
      cursor: default;
      &:hover {
        box-shadow: ${theme.button.shadows.default};
      }
    `}

    
  ${({ active = false, theme }) =>
    active &&
    css`
      cursor: default;
      box-shadow: ${theme.button.shadows.active};
      &:hover {
        box-shadow: ${theme.button.shadows.active};
      }
    `}
`;
