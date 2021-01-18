import { TextareaAutosize } from "@material-ui/core";
import styled, { css } from "styled-components";

export const TextareaRoot = styled(TextareaAutosize)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    outline: none;
    border: none;
    border-radius: 3px;
    resize: none;
    color: #172b4d;
  `}
`;
