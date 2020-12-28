import styled, { css } from "styled-components";

export const QuoteLabel = styled.div`
  text-align: center;
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down("xs")} {
        font-size: 25px;
      }

      ${theme.breakpoints.up("sm")} {
        font-size: 30px;
      }
    `}
`;

export const QuoteRoot = styled.div`
  ${({ theme }) =>
    css`
      ${QuoteLabel} {
        ${theme.breakpoints.down("xs")} {
          width: 128px;
        }
        ${theme.breakpoints.between("sm", "md")} {
          width: 298px;
        }
        ${theme.breakpoints.up("lg")} {
          width: 137px;
        }
      }
    `}
`;
