import { useCallback, useRef } from "react";

export const useImagesLoaded = (imageCount: number) => {
  const loadedImageCountRef = useRef(0);

  const isImagesLoaded = useCallback(() => {
    return loadedImageCountRef.current === imageCount;
  }, [imageCount]);

  const handleImageLoad = useCallback(() => {
    loadedImageCountRef.current += 1;
  }, []);

  return { loadedImageCountRef, isImagesLoaded, handleImageLoad };
};
