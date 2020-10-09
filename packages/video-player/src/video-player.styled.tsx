import styled from "styled-components";

export const VideoPlayer = styled.video`
  cursor: pointer;
`;

export const VideoPlayerWrapper = styled.div`
  max-width: 80vw;
  max-height: 80vh;
  position: relative;

  ${VideoPlayer} {
    width: 100%;
    height: auto;
  }
`;
