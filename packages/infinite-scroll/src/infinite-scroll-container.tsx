import React, { FC } from "react";
import { InfiniteScroll } from "./infinite-scroll";
import { useFetchPhotos } from "./use-fetch-photos";
import { usePhotos } from "./use-photos";

export const InfiniteScrollContainer: FC = () => {
  const {
    photos: apiPhotos,
    loading,
    error,
    handleFetchMore,
  } = useFetchPhotos();
  const { photos } = usePhotos(apiPhotos);

  if (error) {
    console.error(error);
    return <>Oops! {error.message}</>;
  }

  if (!photos) return <>loading...</>;

  return (
    <InfiniteScroll
      loading={loading}
      photos={photos}
      onScrolledToBottom={handleFetchMore}
    />
  );
};
