import { useCallback } from "react";
import { useSWRInfinite } from "swr";
import { UNSPLASH_ACCESS_KEY } from "../config";
import { APIPhoto } from "../modules";

const getKey = (index: number) => [
  `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&count=${
    index === 0 ? 5 : 20
  }`,
  index,
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchPhotos = () => {
  const { data, isValidating, error, setSize } = useSWRInfinite<APIPhoto[]>(
    getKey,
    fetcher,
  );

  const handleFetchMore = useCallback(() => {
    setSize((s) => s + 1);
  }, [setSize]);

  return {
    photos: data,
    loading: isValidating,
    error,
    handleFetchMore,
  };
};
