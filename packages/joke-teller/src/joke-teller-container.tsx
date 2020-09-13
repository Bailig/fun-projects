import React, { FC, useRef } from "react";
import useSWR from "swr";
import { TEXT_TO_SPEECH_API_KEY } from "./config";

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
  const { data: joke, mutate } = useSWR<ApiJoke>(
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist",
    fetchJSON,
    options,
  );

  const jokeString = (() => {
    if (!joke) return;
    if ("setup" in joke) return `${joke.setup} ${joke.delivery}`;
    return joke.joke;
  })();

  const { data: jokeAudio } = useSWR<string>(
    jokeString
      ? `http://api.voicerss.org/?key=${TEXT_TO_SPEECH_API_KEY}&hl=en-us&c=MP3&b64=true&src=${jokeString}`
      : null,
    fetchText,
    options,
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  if (!jokeAudio || !joke) return <>loading...</>;

  const handleClick = () => {
    audioRef.current?.play();
  };

  const handleEnded = () => mutate();

  return (
    <>
      <button type="button" onClick={handleClick}>
        Tell me a joke
      </button>
      <audio ref={audioRef} hidden src={jokeAudio} onEnded={handleEnded}>
        <track kind="captions" />
      </audio>
    </>
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
