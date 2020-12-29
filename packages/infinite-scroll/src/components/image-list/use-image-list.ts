import debounce from "lodash.debounce";
import { useCallback, useEffect, useRef } from "react";

export const useImageList = (
  imageCount: number,
  loading: boolean,
  onScrolledToBottom: () => void,
) => {
  const loadedImageCountRef = useRef(0);

  useEffect(() => {
    const handleScrolledToBottom = debounce(() => {
      if (loading) return;

      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000;
      const allImagesLoaded = loadedImageCountRef.current === imageCount;
      if (scrolledToBottom && allImagesLoaded) {
        onScrolledToBottom();
      }
    }, 500);

    window.addEventListener("scroll", handleScrolledToBottom);
    return () => window.removeEventListener("scroll", handleScrolledToBottom);
  }, [imageCount, loading, onScrolledToBottom]);

  const handleImageLoad = useCallback(() => {
    loadedImageCountRef.current += 1;
  }, []);

  return { handleImageLoad };
};
