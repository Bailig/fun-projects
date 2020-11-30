import { secondsToTime } from "@fun-projects/utils";
import React, { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import {
  AuthorName,
  ChopstickImage,
  MusicControls,
  MusicName,
  MusicNumber,
  MusicPlayerRoot,
  MusicPlayerSoupRoot,
  NextButton,
  PlayButton,
  PreviousButton,
  ProgressBar,
  ProgressLabel,
} from "./music-player.styled";
import { SoupImage } from "./soup-image";

export interface Music {
  src: string;
  name: string;
  author: string;
  url: string;
}

export interface MusicPlayerProps {
  musics: Music[];
}

export const MusicPlayer: FC<MusicPlayerProps> = (props) => {
  const { musics } = props;
  const [musicIndex, setMusicIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const musicRef = useRef<HTMLAudioElement>(null);

  const { src, name, author, url } = musics[musicIndex];
  const totalMusicCount = musics.length;

  useEffect(() => {
    setProgress(0);
    if (playing) musicRef.current?.play();
  }, [musicIndex]);

  const handlePrevious = () => {
    if (musicIndex === 0) return;
    setMusicIndex(musicIndex - 1);
  };

  const handleNext = () => {
    const lastIndex = totalMusicCount - 1;
    if (musicIndex === lastIndex) return;
    setMusicIndex(musicIndex + 1);
  };

  const handlePause = () => {
    musicRef.current!.pause();
    setPlaying(false);
  };

  const handlePlay = () => {
    musicRef.current!.play();
    setPlaying(true);
  };

  const handleTimeUpdate = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    if (!playing) return;
    const target = e.currentTarget;
    setProgress(target.currentTime / target.duration);
    setCurrentTime(target.currentTime);
  };

  const handleProgressBarClick = (value: number) => {
    setProgress(value);
    const musicEl = musicRef.current!;
    musicEl.currentTime = value * musicEl.duration;
    setCurrentTime(musicEl.currentTime);
  };

  const handleDurationChange = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    setDuration(e.currentTarget.duration);
  };

  return (
    <MusicPlayerRoot>
      <MusicPlayerSoupRoot>
        <SoupImage animated={playing} />
        <MusicNumber>
          {musicIndex + 1}/{totalMusicCount}
        </MusicNumber>
        <MusicName href={url} target="_blank">
          {name}
        </MusicName>
        <AuthorName>{author}</AuthorName>
        <MusicControls>
          <PreviousButton onClick={handlePrevious} />
          <PlayButton
            onClick={() => (playing ? handlePause() : handlePlay())}
            isPlaying={playing}
          />
          <NextButton onClick={handleNext} />
        </MusicControls>
      </MusicPlayerSoupRoot>
      <ProgressLabel>
        <div>{secondsToTime(currentTime)}</div>
        <div>{secondsToTime(duration)}</div>
      </ProgressLabel>
      <ProgressBar value={progress} onClick={handleProgressBarClick} />
      <ChopstickImage />
      <audio
        src={src}
        ref={musicRef}
        onEnded={handleNext}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
      />
    </MusicPlayerRoot>
  );
};
