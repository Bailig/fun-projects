import { useCallback } from "react";
import useSWR from "swr";
import { APIJoke } from "../selectors";

const jokeAPIUrl =
  "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist";

export const useFetchJoke = () => {
  const res = useSWR<APIJoke>(jokeAPIUrl);
  const handleRefetch = useCallback(() => res.mutate(), [res]);
  return { ...res, handleRefetch };
};
