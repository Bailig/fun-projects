import React, { FC } from "react";
import videoSrc from "./assets/gouqi.mp4";
import { VideoPlayer, VideoPlayerWrapper } from "./video-player.styled";

export const VideoPlayerContainer: FC = () => {
  return (
    <VideoPlayerWrapper>
      <VideoPlayer src={videoSrc} playsInline />
    </VideoPlayerWrapper>
  );
};
