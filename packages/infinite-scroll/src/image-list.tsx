import React, { FC, memo, useEffect, useRef, useState } from "react";
import { ImageListRoot } from "./image-list.styled";
import { Photo } from "./types";

export interface ImageListProps {
  photos: Photo[];
  onScrolledToBottom: () => void;
}

export const ImageList: FC<ImageListProps> = memo((props) => {
  const { photos, onScrolledToBottom } = props;
  const imagesLoadedRef = useRef<boolean>(false);
  const [imagesLoadedCount, setImagesLoadedCount] = useState<number>(0);

  useEffect(() => {
    if (imagesLoadedCount > 0 && imagesLoadedCount === photos?.length) {
      imagesLoadedRef.current = true;
    }
  }, [imagesLoadedCount, photos?.length]);

  useEffect(() => {
    const handleScrolledToBottom = () => {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000;

      if (isScrolledToBottom && imagesLoadedRef.current) {
        imagesLoadedRef.current = false;
        onScrolledToBottom();
      }
    };

    window.addEventListener("scroll", handleScrolledToBottom);
    return () => window.removeEventListener("scroll", handleScrolledToBottom);
  }, [onScrolledToBottom]);

  const handleImageLoad = () => {
    setImagesLoadedCount((c) => c + 1);
  };

  return (
    <ImageListRoot>
      {photos.map(({ id, url, alt }) => (
        <img
          key={id}
          src={url}
          onLoad={() => handleImageLoad()}
          alt={alt}
          width="80%"
        />
      ))}
    </ImageListRoot>
  );
});
