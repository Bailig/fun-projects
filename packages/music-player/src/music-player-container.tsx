
import { ProgressBar } from "@fun-projects/ui";
import { secondsToTime } from "@fun-projects/utils";
import React, { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import cantYouSee from "./assets/cant-you-see.mp3";
import holidayBlues from "./assets/holiday-blues.mp3";
import nextIcon from "./assets/next.svg";
import pauseIcon from "./assets/pause.svg";
import playIcon from "./assets/play.svg";
import previousIcon from "./assets/previous.svg";
import strawberry from "./assets/strawberry.mp3";
import {
  AuthorName,
  MusicControl,
  MusicName,
  MusicPlayerRoot,
  ProgressLabel
} from "./music-player.styled";




const MUSICS = [
  {
    src: cantYouSee,
    name: "Can't you see",
    author: "Dyalla",
    credit: "Can't you see by Dyalla",
    url: "https://soundcloud.com/dyallas/cant-you-see",
  },
  {
    src: holidayBlues,
    name: "Holiday blues",
    author: "Joakim Karud",
    credit: "Holiday blues by Joakim Karud",
    url: "https://soundcloud.com/joakimkarud/holiday-blues",
  },
  {
    src: strawberry,
    name: "Strawberry",
    author: "Jeff Kaale",
    credit: "Strawberry by Jeff Kaale",
    url: "https://soundcloud.com/jeff-kaale/strawberry",
  },
];

export const MusicPlayerContainer: FC = () => {
  const [musicIndex, setMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const musicRef = useRef<HTMLAudioElement>(null);

  const { src, name, author, url } = MUSICS[musicIndex];
  const totalMusicCount = MUSICS.length;

  useEffect(() => {
    setProgress(0);
    if (isPlaying) musicRef.current?.play();
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
    musicRef.current?.pause();
    setIsPlaying(false);
  };

  const handlePlay = () => {
    musicRef.current?.play();
    setIsPlaying(true);
  };

  const handleTimeUpdate = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    if (!isPlaying) return;
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
      <MusicName>{name}</MusicName>
      <AuthorName>{author}</AuthorName>
      <a href={url} target="_blank" rel="noreferrer">
        link to original music
      </a>
      <ProgressLabel>
        <div>{secondsToTime(currentTime)}</div>
        <div>{secondsToTime(duration)}</div>
      </ProgressLabel>
      <ProgressBar value={progress} onClick={handleProgressBarClick} />
      <button type="button" onClick={handlePrevious}>
        <MusicControl src={previousIcon} alt="previous" />
      </button>
      <button
        type="button"
        onClick={() => (isPlaying ? handlePause() : handlePlay())}
      >
        <MusicControl
          src={isPlaying ? pauseIcon : playIcon}
          alt={isPlaying ? "pause" : "play"}
        />
      </button>
      <button type="button" onClick={handleNext}>
        <MusicControl src={nextIcon} alt="next" />
      </button>
      <audio
        src={src}
        ref={musicRef}
        onEnded={handleNext}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
      />
      <div>
        {musicIndex + 1}/{totalMusicCount}
      </div>
    </MusicPlayerRoot>
  );
};
