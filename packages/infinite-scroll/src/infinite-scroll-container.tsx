import React, { FC, useCallback, useMemo } from "react";
import { useSWRInfinite } from "swr";
import { InfiniteScroll } from "./infinite-scroll";
import { getUrlByIndex, mapPhotos } from "./infinite-scroll-services";
import { ApiPhoto } from "./types";

export const InfiniteScrollContainer: FC = () => {
  const { data, error, setSize } = useSWRInfinite<ApiPhoto[]>(getUrlByIndex);
  const photos = useMemo(() => data && mapPhotos(data), [data]);

  const handleScrolledToBottom = useCallback(() => {
    setSize((s) => s + 1);
  }, [setSize]);

  if (error) return <>Oops!</>;
  if (!photos) return <>loading...</>;

  return (
    <InfiniteScroll
      photos={photos}
      onScrolledToBottom={handleScrolledToBottom}
    />
  );
};
