import React, { FC, useRef, useState } from "react";
import { Button, JokeTellerRoot } from "./joke-teller.styled";
import { OnigiriImage } from "./onigiri-image";
import { onigiriImage } from "./onigiri-image.styled";

export interface JokeTellerProps {
  audioSrc?: string;
  loading: boolean;
  onEnded: () => void;
}

export const JokeTeller: FC<JokeTellerProps> = (props) => {
  const { audioSrc, loading, onEnded } = props;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [animated, setAnimated] = useState<boolean>(false);

  const handleClick = () => {
    setAnimated(true);
    setTimeout(() => {
      audioRef.current!.play();
      setAnimated(false);
      setPlaying(true);
    }, onigiriImage.duration);
  };

  const handleEnded = () => {
    setPlaying(false);
    onEnded();
  };

  return (
    <JokeTellerRoot>
      <OnigiriImage animated={animated} />
      <Button onClick={handleClick} disabled={animated || playing || loading}>
        Tell me a joke
      </Button>
      <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} />
    </JokeTellerRoot>
  );
};
