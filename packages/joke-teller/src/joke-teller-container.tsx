import React, { FC } from "react";
import useSWR from "swr";
import { JokeTeller } from "./joke-teller";
import {
  fetchText,
  getTextToSpeechAPIUrl,
  jokeAPIUrl,
  toJokeString,
} from "./joke-teller-services";
import { APIJoke } from "./types";

export const JokeTellerContainer: FC = () => {
  const jokeRes = useSWR<APIJoke>(jokeAPIUrl);
  const jokeString = jokeRes.data && toJokeString(jokeRes.data);
  const jokeSpeechRes = useSWR<string>(
    getTextToSpeechAPIUrl(jokeString),
    fetchText,
  );

  const loading = jokeSpeechRes.isValidating || jokeRes.isValidating;

  const handleEnded = () => jokeRes.mutate();

  return (
    <JokeTeller
      loading={loading}
      audioSrc={jokeSpeechRes.data}
      onEnded={handleEnded}
    />
  );
};
