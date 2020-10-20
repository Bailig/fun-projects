import debounce from "lodash.debounce";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useSWRInfinite } from "swr";
import { ImageList } from "./image-list";
import { getUrlByIndex, mapPhotos } from "./image-list-services";
import {
  BowlImage,
  BowlImageWrapper,
  ChopsticksImage,
  ChopsticksImageWrapper,
  ImageListContainerRoot,
} from "./image-list.styled";
import { ApiPhoto } from "./types";

export const ImageListContainer: FC = () => {
  const { data, error, setSize } = useSWRInfinite<ApiPhoto[]>(getUrlByIndex);
  const [windowScrollY, setWindowScrollY] = useState<number>(0);

  const photos = useMemo(() => data && mapPhotos(data), [data]);

  useEffect(() => {
    const handleWindowScroll = debounce(() => {
      setWindowScrollY(window.scrollY);
    }, 30);

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [setSize]);

  const handleScrolledToBottom = useCallback(() => {
    setSize((s) => s + 1);
  }, [setSize]);

  if (!photos) return <>loading...</>;
  if (error) return <>Oops!</>;

  const bowlImageWrapperStyle = {
    paddingBottom: `calc(var(--top-bottom-space) - ${windowScrollY}px)`,
  };

  return (
    <ImageListContainerRoot>
      <ChopsticksImageWrapper>
        <ChopsticksImage />
      </ChopsticksImageWrapper>
      <ImageList photos={photos} onScrolledToBottom={handleScrolledToBottom} />
      <BowlImageWrapper style={bowlImageWrapperStyle}>
        <BowlImage />
      </BowlImageWrapper>
    </ImageListContainerRoot>
  );
};
