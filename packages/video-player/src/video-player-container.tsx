import React, { FC } from "react";
import videoSrc from "./assets/gouqi.mp4";
import { VideoControls } from "./video-controls";
import { VideoPlayer, VideoPlayerWrapper } from "./video-player.styled";

export const VideoPlayerContainer: FC = () => {
  return (
    <VideoPlayerWrapper>
      <VideoPlayer src={videoSrc} playsInline />
      <VideoControls currentTime={0} totalTime={5 * 60} />
    </VideoPlayerWrapper>
  );
};
