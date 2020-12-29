import React, { FC, memo } from "react";
import { Photo } from "../../selectors";
import { ImageListRoot } from "./image-list.styled";
import { useImageList } from "./use-image-list";

export interface ImageListProps {
  photos: Photo[];
  loading: boolean;
  onScrolledToBottom: () => void;
}

export const ImageList: FC<ImageListProps> = memo((props) => {
  const { loading, photos, onScrolledToBottom } = props;
  const { handleImageLoad } = useImageList(
    photos.length,
    loading,
    onScrolledToBottom,
  );

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
