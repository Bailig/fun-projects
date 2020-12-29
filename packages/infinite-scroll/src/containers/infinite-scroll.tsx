import React, { FC } from "react";
import { InfiniteScroll } from "../components";
import { useFetchPhotos, usePhotos } from "../interactions";

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
