import styled, { css } from "styled-components";

export const MusicPlayerRoot = styled.div`
  font-family: sans-serif;
`;

export const MusicName = styled.div`
  font-weight: 500;
  text-align: center;
  color: #ffdd63;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        font-size: 20px;
      }

      ${theme.breakpoints.between("sm", "md")} {
        font-size: 46px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 54px;
      }
    `}
`;

export const AuthorName = styled.div`
  font-weight: 300;
  text-align: center;
  color: #f2ebdf;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${theme.breakpoints.between("sm", "md")} {
        font-size: 26px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 30px;
      }
    `}
`;

export const ProgressLabel = styled.div`
  color: #f2ebdf;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        font-size: 8px;
        line-height: 9px;
      }

      ${theme.breakpoints.up("sm", "md")} {
        font-size: 12px;
        line-height: 14px;
      }
    `}
`;

export const MusicControl = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
    filter: none;
  }
  &:hover {
    filter: drop-shadow(0px 4px 4px #ffc700);
  }
`;
