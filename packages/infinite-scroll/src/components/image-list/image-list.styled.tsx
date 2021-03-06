import styled, { css } from "styled-components";
import noodlesImg from "../../assets/noodles-down-md.png";
import noodlesImgLG from "../../assets/noodles-up-lg.png";

export const ImageListRoot = styled.div`
  display: grid;
  background-repeat: repeat-y;
  justify-items: center;

  ${({ theme }) =>
    css`
      width: 179px;
      background-image: url(${noodlesImg});
      grid-row-gap: ${theme.space[1]}px;

      ${theme.mediaQueries.lg} {
        width: 308px;
        background-image: url(${noodlesImgLG});
        grid-row-gap: ${theme.space[2]}px;
      }
    `};
`;
