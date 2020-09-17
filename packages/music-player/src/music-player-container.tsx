import { ProgressBar } from "@fun-projects/ui";
import React, { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import cantYouSee from "./assets/cant-you-see.mp3";
import holidayBlues from "./assets/holiday-blues.mp3";
import strawberry from "./assets/strawberry.mp3";
import { secondsToTime } from "./utils";

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
  const [progressValue, setProgressValue] = useState(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const musicRef = useRef<HTMLAudioElement>(null);

  const { src, name, author, url } = MUSICS[musicIndex];
  const totalMusicCount = MUSICS.length;

  useEffect(() => {
    setProgressValue(0);
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
    setProgressValue(target.currentTime / target.duration);
    setCurrentTime(target.currentTime);
  };

  const handleProgressBarClick = (value: number) => {
    setProgressValue(value);
    const musicEl = musicRef.current!;
    musicEl.currentTime = value * musicEl.duration;
    setCurrentTime(musicEl.currentTime);
  };

  const handleDurationChange = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    setDuration(e.currentTarget.duration);
  };
  return (
    <>
      <div>{name}</div>
      <div>by {author}</div>
      <a href={url} target="_blank" rel="noreferrer">
        link to original music
      </a>
      <ProgressBar value={progressValue} onClick={handleProgressBarClick} />
      <div>
        <span>{secondsToTime(currentTime)}</span>/
        <span>{secondsToTime(duration)}</span>
      </div>
      <button type="button" onClick={handlePrevious}>
        previous
      </button>
      <button
        type="button"
        onClick={() => (isPlaying ? handlePause() : handlePlay())}
      >
        {isPlaying ? "pause" : "play"}
      </button>
      <button type="button" onClick={handleNext}>
        next
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
    </>
  );
};
