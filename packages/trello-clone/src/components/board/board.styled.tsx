import styled, { css } from "styled-components";

export const ListWrapper = styled.div`
  height: 100%;
`;

export const BoardRoot = styled.div`
  /* TODO move font family to project root */
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;

  ${({ theme }) => css`
    padding: ${theme.space[2]}px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 272px;
    grid-auto-rows: 100%;
    column-gap: ${theme.space[1]}px;
    overflow-x: auto;
    overflow-y: hidden;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `}
`;
