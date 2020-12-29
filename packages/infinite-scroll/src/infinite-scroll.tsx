import React, { FC } from "react";
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
import { useScrollY } from "./use-scroll-y";

export type InfiniteScrollProps = ImageListProps;

export const InfiniteScroll: FC<InfiniteScrollProps> = (props) => {
  const { loading, photos, onScrolledToBottom } = props;
  const { scrollY } = useScrollY();

  const bowlImageWrapperStyle = {
    paddingBottom: `calc(var(--top-bottom-space) - ${scrollY}px)`,
  };

  return (
    <InfiniteScrollRoot>
      <ChopsticksImageWrapper>
        <ChopsticksImage />
      </ChopsticksImageWrapper>
      <ImageList
        loading={loading}
        photos={photos}
        onScrolledToBottom={onScrolledToBottom}
      />
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
