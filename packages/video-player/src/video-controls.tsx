import { ProgressBar } from "@fun-projects/ui";
import { secondsToTime } from "@fun-projects/utils";
import React, { FC, useState } from "react";

const PLAYBACK_SPEED = [0.5, 0.75, 1, 1.5, 2];

interface VideoControlsProps {
  totalTime: number;
  currentTime?: number;
  playing?: boolean;
  onToggle?: () => void;
  onVolumeChange?: (value: number) => void;
  onProgressChange?: (value: number) => void;
  onPlaybackSpeedChange?: (value: number) => void;
  onFullScreen?: () => void;
}

export const VideoControls: FC<VideoControlsProps> = ({
  totalTime,
  currentTime = 0,
  playing = false,
  onToggle = () => {},
  onVolumeChange = () => {},
  onProgressChange = () => {},
  onPlaybackSpeedChange = () => {},
  onFullScreen = () => {},
}) => {
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const handleMute = () => {
    setIsMuted(true);
    onVolumeChange(0);
  };

  const handleUnmute = () => {
    setIsMuted(false);
    onVolumeChange(volume);
  };

  const handleVolumeChange = (value: number) => {
    const rounded = (() => {
      if (value < 0.1) return 0;
      if (value > 0.9) return 1;
      return value;
    })();
    setVolume(rounded);
    onVolumeChange(rounded);
  };

  const handlePlaybackSpeedChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const speed = parseFloat(e.target.value);
    setPlaybackSpeed(speed);
    onPlaybackSpeedChange(speed);
  };

  return (
    <>
      <ProgressBar value={currentTime / totalTime} onClick={onProgressChange} />
      <button
        type="button"
        title={playing ? "Pause" : "Play"}
        onClick={() => onToggle()}
      >
        {playing ? "Pause" : "Play"}
      </button>
      <button
        type="button"
        title={isMuted ? "Unmute" : "Mute"}
        onClick={() => (isMuted ? handleUnmute() : handleMute())}
      >
        {isMuted ? "unmute" : "mute"}
      </button>
      <div>Volume</div>
      <ProgressBar value={isMuted ? 0 : volume} onClick={handleVolumeChange} />
      <select
        title="Playback speed"
        value={playbackSpeed}
        onChange={handlePlaybackSpeedChange}
      >
        {PLAYBACK_SPEED.map((speed) => (
          <option key={speed} value={speed}>
            {speed} x
          </option>
        ))}
      </select>
      <div>
        {secondsToTime(currentTime)} / {secondsToTime(totalTime)}
      </div>
      <button type="button" title="Full screen" onClick={() => onFullScreen()}>
        full screen
      </button>
    </>
  );
};
