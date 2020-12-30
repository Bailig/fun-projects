import React, { FC } from "react";
import { Music } from "../../modules";
import { SoupImage } from "../soup-image/soup-image";
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
import { useMusicPlayer } from "./use-music-player";

export interface MusicPlayerProps {
  musics: Music[];
}

export const MusicPlayer: FC<MusicPlayerProps> = (props) => {
  const { musics } = props;
  const {
    src,
    name,
    author,
    url,
    musicIndex,
    playing,
    totalMusicCount,
    musicRef,
    currentTime,
    currentTimeText,
    duration,
    durationText,
    loading,
    handlePrevious,
    handleNext,
    handlePause,
    handlePlay,
    handleTimeUpdate,
    handleProgressBarClick,
    handleDurationChange,
    handleLoaded,
  } = useMusicPlayer(musics);

  return (
    <MusicPlayerRoot>
      <MusicPlayerSoupRoot>
        <SoupImage animated={playing} />
        <MusicNumber>
          {musicIndex + 1}/{totalMusicCount}
        </MusicNumber>
        <MusicName href={url} target="_blank">
          {loading ? "loading" : name}
        </MusicName>
        <AuthorName>{author}</AuthorName>
        <MusicControls>
          <PreviousButton disabled={loading} onClick={handlePrevious} />
          <PlayButton
            disabled={loading}
            onClick={() => (playing ? handlePause() : handlePlay())}
            playing={playing}
          />
          <NextButton disabled={loading} onClick={handleNext} />
        </MusicControls>
      </MusicPlayerSoupRoot>
      <ProgressLabel>
        <div>{currentTimeText}</div>
        <div>{durationText}</div>
      </ProgressLabel>
      <ProgressBar
        value={currentTime}
        max={duration}
        disabled={loading}
        onClick={handleProgressBarClick}
      />
      <ChopstickImage />
      <audio
        src={src}
        ref={musicRef}
        onEnded={handleNext}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onCanPlayThrough={handleLoaded}
      />
    </MusicPlayerRoot>
  );
};
