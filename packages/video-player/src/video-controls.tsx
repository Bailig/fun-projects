import { ProgressBar } from "@fun-projects/ui";
import { secondsToTime } from "@fun-projects/utils";
import React, { FC, useState } from "react";

interface VideoControlsProps {
  currentTime: number;
  totalTime: number;
  volume?: number;
  onPlay?: () => void;
  onPause?: () => void;
  onVolumeChange?: (value: number) => void;
  onProgressChange?: (value: number) => void;
  onPlaySpeedChange?: (value: number) => void;
  onFullScreen?: () => void;
}

export const VideoControls: FC<VideoControlsProps> = ({
  volume = 0.5,
  currentTime,
  totalTime,
  onPause = () => {},
  onPlay = () => {},
  onVolumeChange = () => {},
  onProgressChange = () => {},
  onPlaySpeedChange = () => {},
  onFullScreen = () => {},
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay();
  };
  const handlePause = () => {
    setIsPlaying(false);
    onPause();
  };
  const handleMute = () => {
    setIsMuted(true);
    onVolumeChange(0);
  };
  const handleUnmute = () => {
    setIsMuted(false);
    onVolumeChange(1);
  };
  const handlePlaySpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onPlaySpeedChange(parseFloat(e.target.value));
  };

  return (
    <>
      <ProgressBar value={currentTime / totalTime} onClick={onProgressChange} />
      <button
        type="button"
        onClick={() => (isPlaying ? handlePause() : handlePlay())}
      >
        {isPlaying ? "play" : "pause"}
      </button>
      <button
        type="button"
        onClick={() => (isMuted ? handleUnmute() : handleMute())}
      >
        {isMuted ? "unmute" : " mute"}
      </button>
      <ProgressBar value={volume} onClick={onVolumeChange} />
      <select onChange={handlePlaySpeedChange}>
        <option value="0.5">0.5 x</option>
        <option value="0.75">0.75 x</option>
        <option value="1">1.0 x</option>
        <option value="1.5">1.5 x</option>
        <option value="2">2.0 x</option>
      </select>
      <div>
        {secondsToTime(currentTime)} / {secondsToTime(totalTime)}
      </div>
      <button type="button" onClick={() => onFullScreen()}>
        full screen
      </button>
    </>
  );
};
