import { Button } from "@material-ui/core";
import styled, { css } from "styled-components";

export const ListHeader = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space[1] / 2}px;
  `}
`;

export const ListCards = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space[1] / 2}px;
    display: grid;
    row-gap: ${theme.space[1]}px;
    overflow-y: auto;
  `}
`;

export const ListFooter = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space[1] / 2}px;
  `}
`;

export const ListButton = styled(Button)`
  ${({ theme }) => css`
    background-color: transparent;
    border-radius: 3px;
    color: #5e6c84;
    padding: ${theme.space[1] / 2}px ${theme.space[1]}px;
  `}
`;

export const ListRoot = styled.div`
  /* TODO move font family to project root */
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;

  background-color: #ebecf0;
  border-radius: 3px;
  max-height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;

  ${({ theme }) => css`
    padding: ${theme.space[1] / 2}px;
  `}
`;
