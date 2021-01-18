import { IconButton as MUIIconButton, Popover } from "@material-ui/core";
import styled, { css } from "styled-components";

export const IconButton = styled(MUIIconButton)`
  ${({ theme }) => css`
    &.MuiButtonBase-root {
      background-color: #f4f5f7;
      border-radius: 3px;
      padding: ${theme.space[1] / 2}px;
    }
    .MuiSvgIcon-root {
      width: 20px;
      height: 20px;
    }
  `}
`;

export const ListCardRoot = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.space[1]}px;
    background-color: #ffffff;

    ${IconButton} {
      visibility: hidden;
      position: absolute;
      top: ${theme.space[1] / 4}px;
      right: ${theme.space[1] / 4}px;
    }
    &:hover {
      ${IconButton} {
        visibility: visible;
      }
    }
  `};
`;

export const PopoverRoot = styled(Popover)`
  &.MuiPopover-root {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
