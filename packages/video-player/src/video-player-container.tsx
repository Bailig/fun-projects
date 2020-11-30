import React, { FC, useRef, useState } from "react";
import videoSrc from "./assets/travel.mp4";
import { VideoControls } from "./video-controls";
import { VideoPlayer, VideoPlayerWrapper } from "./video-player.styled";

export const VideoPlayerContainer: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [playing, setPlaying] = useState(false);
  const fullscreenRef = useRef<boolean>(false);

  const handleToggle = () => {
    const videoEl = videoRef.current!;
    if (playing) {
      videoEl.pause();
      setPlaying(false);
    } else {
      videoEl.play();
      setPlaying(true);
    }
  };

  const handleProgressUpdate = () => {
    const videoEl = videoRef.current!;
    setCurrentTime(videoEl.currentTime);
  };
  const handleVolumeChange = (value: number) => {
    videoRef.current!.volume = value;
  };

  const handlePlaybackSpeedChange = (value: number) => {
    videoRef.current!.playbackRate = value;
  };

  const handleFullScreen = () => {
    const videoEl = videoRef.current!;
    const fullscreen = fullscreenRef.current;
    if (!fullscreen) {
      videoEl.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    fullscreenRef.current = !fullscreen;
  };

  const handleDurationChange = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>,
  ) => {
    setTotalTime(e.currentTarget.duration);
  };

  const handleProgressChange = (value: number) => {
    videoRef.current!.currentTime = value * totalTime;
    setCurrentTime(value * totalTime);
  };

  return (
    <VideoPlayerWrapper>
      <VideoPlayer
        ref={videoRef}
        src={videoSrc}
        playsInline
        onClick={handleToggle}
        onTimeUpdate={handleProgressUpdate}
        onCanPlay={handleProgressUpdate}
        onDurationChange={handleDurationChange}
      />
      <VideoControls
        currentTime={currentTime}
        totalTime={totalTime}
        playing={playing}
        onToggle={handleToggle}
        onProgressChange={handleProgressChange}
        onVolumeChange={handleVolumeChange}
        onPlaybackSpeedChange={handlePlaybackSpeedChange}
        onFullScreen={handleFullScreen}
      />
    </VideoPlayerWrapper>
  );
};
