import React, { FC, useRef, useState } from "react";
import useSWR from "swr";
import { TEXT_TO_SPEECH_API_KEY } from "./config";
import {
  Button,
  JokeTeller,
  JokeTellerContainerRoot,
  OnigiriImage,
} from "./joke-teller.styled";

const fetchText = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  return response.text();
};
const fetchJSON = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  return response.json();
};

const options = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export const JokeTellerContainer: FC = () => {
  const jokeRes = useSWR<ApiJoke>(
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist",
    fetchJSON,
    options,
  );

  const jokeString = (() => {
    if (!jokeRes.data) return;
    const { data } = jokeRes;
    if ("setup" in data) return `${data.setup} ${data.delivery}`;
    return data.joke;
  })();

  const jokeAudioRes = useSWR<string>(
    jokeString
      ? `https://api.voicerss.org/?key=${TEXT_TO_SPEECH_API_KEY}&hl=en-us&c=MP3&b64=true&src=${jokeString}`
      : null,
    fetchText,
    options,
  );

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  const loading = jokeAudioRes.isValidating || jokeRes.isValidating;

  const handleClick = () => {
    audioRef.current!.play();
    setPlaying(true);
  };

  const handleEnded = () => {
    jokeRes.mutate();
    setPlaying(false);
  };

  return (
    <JokeTellerContainerRoot>
      <JokeTeller>
        <OnigiriImage />
        <Button
          type="button"
          onClick={handleClick}
          disabled={playing || loading}
        >
          Ask Onigiri for a joke
        </Button>
      </JokeTeller>
      <audio ref={audioRef} src={jokeAudioRes.data} onEnded={handleEnded} />
    </JokeTellerContainerRoot>
  );
};

// types
export type ApiJoke =
  | {
      setup: string;
      delivery: string;

      id: number;
    }
  | {
      id: number;
      joke: string;
    };
