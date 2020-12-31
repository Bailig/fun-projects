import React, { FC, memo, useCallback } from "react";
import { Photo } from "../../modules";
import { ImageListRoot } from "./image-list.styled";
import { useImagesLoaded } from "./use-images-loaded";
import { useScrolledToBottom } from "./use-scrolled-to-bottom";

export interface ImageListProps {
  photos: Photo[];
  loading: boolean;
  onScrolledToBottom: () => void;
}

export const ImageList: FC<ImageListProps> = memo((props) => {
  const { loading, photos, onScrolledToBottom } = props;
  
  const { isImagesLoaded, handleImageLoad } = useImagesLoaded(photos.length)

  const handleScrolledToBottom = useCallback(() => {
    if (loading || !isImagesLoaded()) return;
    onScrolledToBottom()
  }, [isImagesLoaded, loading, onScrolledToBottom]);

  useScrolledToBottom(handleScrolledToBottom);


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
