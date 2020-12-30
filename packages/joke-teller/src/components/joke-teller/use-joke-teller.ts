import { useCallback, useMemo, useRef, useState } from "react";

export const useJokeTeller = (loading: boolean, onEnded: () => void) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [animated, setAnimated] = useState<boolean>(false);

  const disabled = useMemo(() => animated || playing || loading, [
    animated,
    loading,
    playing,
  ]);

  const handleClick = useCallback(() => {
    audioRef.current!.play();
    setAnimated(true);
    setPlaying(true);
  }, []);

  const handleEnded = useCallback(() => {
    setPlaying(false);
    setAnimated(false);
    onEnded();
  }, [onEnded]);

  return { audioRef, playing, animated, disabled, handleClick, handleEnded };
};
