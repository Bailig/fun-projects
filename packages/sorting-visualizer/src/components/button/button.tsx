import styled, { css } from "styled-components";

export interface ButtonProps {
  active?: boolean;
  disabled?: boolean;
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
    background: ${theme.colors.blue[0]};
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes[1]}px;

    &:active {
      box-shadow: ${theme.shadows[0]};
    }

    ${theme.mediaQueries.sm} {
      font-size: ${theme.fontSizes[3]}px;
    }
  `}

  ${({ disabled = false, theme }) =>
    disabled
      ? css`
          cursor: default;
        `
      : css`
          &:hover {
            background: ${theme.colors.yellow};
          }
        `}

    
  ${({ active = false, theme }) =>
    active &&
    css`
      background: ${theme.colors.yellow};
      box-shadow: ${theme.shadows[0]};
    `}
`;
