import React, { FC, useCallback, useMemo } from "react";
import { useSWRInfinite } from "swr";
import { InfiniteScroll } from "./infinite-scroll";
import { getAPIUrlByIndex, mapPhotos } from "./infinite-scroll-services";
import { APIPhoto } from "./types";

export const InfiniteScrollContainer: FC = () => {
  const { data, error, setSize } = useSWRInfinite<APIPhoto[]>(getAPIUrlByIndex);
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
