import debounce from "lodash.debounce";
import React, { FC, useEffect, useState } from "react";
import { ImageList, ImageListProps } from "./image-list";
import {
  BowlImage,
  BowlImageWrapper,
  ChopsticksImage,
  ChopsticksImageWrapper,
  DownArrow,
  InfiniteScrollRoot,
  ScrollMe,
  ScrollMeLabel,
} from "./infinite-scroll.styled";

export type InfiniteScrollProps = ImageListProps;

export const InfiniteScroll: FC<InfiniteScrollProps> = (props) => {
  const { photos, onScrolledToBottom } = props;
  const [windowScrollY, setWindowScrollY] = useState<number>(0);

  useEffect(() => {
    const handleWindowScroll = debounce(() => {
      setWindowScrollY(window.scrollY);
    }, 15);

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const bowlImageWrapperStyle = {
    paddingBottom: `calc(var(--top-bottom-space) - ${windowScrollY}px)`,
  };

  return (
    <InfiniteScrollRoot>
      <ChopsticksImageWrapper>
        <ChopsticksImage />
      </ChopsticksImageWrapper>
      <ImageList photos={photos} onScrolledToBottom={onScrolledToBottom} />
      <BowlImageWrapper style={bowlImageWrapperStyle}>
        <BowlImage />
      </BowlImageWrapper>
      <ScrollMe>
        <ScrollMeLabel>Scroll me</ScrollMeLabel>
        <DownArrow />
      </ScrollMe>
    </InfiniteScrollRoot>
  );
};
