import { secondsToTime } from "@fun-projects/utils";
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Music } from "../../modules";

export const useMusicPlayer = (musics: Music[]) => {
  const [musicIndex, setMusicIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const previouslyPlayingRef = useRef(false);
  const musicRef = useRef<HTMLAudioElement>(null);

  const { src, name, author, url } = musics[musicIndex];
  const totalMusicCount = musics.length;
  const currentTimeText = secondsToTime(currentTime);
  const durationText = secondsToTime(duration);
  const progress = currentTime / duration;

  useEffect(() => {
    setPlaying(false);
    setCurrentTime(0);
    setLoading(true);
  }, [musicIndex]);

  const handlePlay = useCallback(() => {
    musicRef.current!.play();
    previouslyPlayingRef.current = true;
    setPlaying(true);
  }, []);

  useEffect(() => {
    if (previouslyPlayingRef.current && !loading) {
      handlePlay();
    }
  }, [handlePlay, loading]);

  const handlePrevious = useCallback(() => {
    if (musicIndex === 0) return;
    setMusicIndex(musicIndex - 1);
  }, [musicIndex]);

  const handleNext = useCallback(() => {
    const lastIndex = totalMusicCount - 1;
    if (musicIndex === lastIndex) return;
    setMusicIndex(musicIndex + 1);
  }, [musicIndex, totalMusicCount]);

  const handlePause = useCallback(() => {
    musicRef.current!.pause();
    previouslyPlayingRef.current = false;
    setPlaying(false);
  }, []);

  const handleTimeUpdate = useCallback(
    (e: SyntheticEvent<HTMLAudioElement, Event>) => {
      if (!playing) return;
      const target = e.currentTarget;
      setCurrentTime(target.currentTime);
    },
    [playing],
  );

  const handleProgressBarClick = useCallback((value: number) => {
    const musicEl = musicRef.current!;
    musicEl.currentTime = value;
    setCurrentTime(musicEl.currentTime);
  }, []);

  const handleDurationChange = useCallback(
    (e: SyntheticEvent<HTMLAudioElement, Event>) => {
      setDuration(e.currentTarget.duration);
    },
    [],
  );

  const handleLoaded = useCallback(() => {
    setLoading(false);
  }, []);

  return {
    src,
    name,
    author,
    url,
    musicIndex,
    playing,
    progress,
    duration,
    currentTime,
    totalMusicCount,
    musicRef,
    currentTimeText,
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
  };
};
