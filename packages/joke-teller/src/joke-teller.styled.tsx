import styled, { css } from "styled-components";
import onigiriDownMD from "./assets/onigiri-down-md.png";
import onigiriUpLG from "./assets/onigiri-up-lg.png";

export const OnigiriImage = styled.div`
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("md")} {
        width: 308px;
        height: 333px;
        background-image: url(${onigiriDownMD});
      }

      ${theme.breakpoints.up("lg")} {
        width: 504px;
        height: 545px;
        background-image: url(${onigiriUpLG});
      }
    `}
`;

export const Button = styled.button`
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
      ${theme.breakpoints.down("md")} {
        font-size: 10px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 14px;
      }
    `}
`;

export const JokeTeller = styled.div`
  position: relative;

  ${Button} {
    position: absolute;
    ${({ theme }) => css`
      right: ${theme.spacing(2)}px;
      bottom: ${theme.spacing(4)}px;
    `}
  }
`;

export const JokeTellerContainerRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #67beb1;
`;
