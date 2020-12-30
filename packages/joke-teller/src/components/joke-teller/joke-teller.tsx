import React, { FC } from "react";
import { OnigiriImage } from "../onigiri-image/onigiri-image";
import { Button, JokeTellerRoot } from "./joke-teller.styled";
import { useJokeTeller } from "./use-joke-teller";

export interface JokeTellerProps {
  audioSrc?: string;
  loading: boolean;
  onEnded: () => void;
}

export const JokeTeller: FC<JokeTellerProps> = (props) => {
  const { audioSrc, loading, onEnded } = props;
  const {
    audioRef,
    animated,
    disabled,
    handleClick,
    handleEnded,
  } = useJokeTeller(loading, onEnded);

  return (
    <JokeTellerRoot>
      <OnigiriImage animated={animated} />
      <Button onClick={handleClick} disabled={disabled}>
        Tell me a joke
      </Button>
      <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} />
    </JokeTellerRoot>
  );
};
