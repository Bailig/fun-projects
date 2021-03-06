import styled, { css } from "styled-components";

export const Button = styled.button<{ disabled: boolean }>`
  background: #f48b95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 0.8em;
  color: #f3ede0;

  &:hover {
    box-shadow: 0px 4px 4px #746d57;
  }

  &:active {
    box-shadow: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    `}

  ${({ theme }) =>
    css`
      ${theme.mediaQueries.sm} {
        font-size: 26px;
      }
    `}
`;

export const JokeTellerRoot = styled.div`
  font-family: OzCaramel, sans-serif;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${Button} {
    position: absolute;
    left: 20%;
    top: 10%;
  }
`;
