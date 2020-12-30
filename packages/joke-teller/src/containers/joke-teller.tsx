import React, { FC } from "react";
import { JokeTeller } from "../components";
import { useFetchJoke, useFetchSpeech, useJoke } from "../interactions";

export const JokeTellerContainer: FC = () => {
  const jokeRes = useFetchJoke();
  const { jokeText } = useJoke(jokeRes.data);
  const speechRes = useFetchSpeech(jokeText);

  const loading = speechRes.isValidating || jokeRes.isValidating;

  return (
    <JokeTeller
      loading={loading}
      audioSrc={speechRes.data}
      onEnded={jokeRes.handleRefetch}
    />
  );
};
