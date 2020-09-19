import React from "react";
import { VideoControls } from "./video-controls";

export const Default = () => (
  <VideoControls currentTime={0} totalTime={10000} />
);

export default {
  title: "video-player/VideoControls",
  component: VideoControls,
};
