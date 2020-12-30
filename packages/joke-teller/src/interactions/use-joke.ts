import { useMemo } from "react";
import { APIJoke, selectJokeText } from "../selectors";

export const useJoke = (joke?: APIJoke) => {
  const jokeText = useMemo(() => joke && selectJokeText(joke), [joke]);
  return {
    jokeText,
  };
};
