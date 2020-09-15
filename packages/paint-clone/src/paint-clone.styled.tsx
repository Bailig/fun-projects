import styled from "styled-components";

export const MobileMessage = styled.h1`
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const Canvas = styled.canvas`
  cursor: crosshair;
`;
